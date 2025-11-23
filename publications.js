// Convert BibTeX entry to CSL-JSON format
function convertBibtexToCSL(entry) {
    const cslItem = {
        id: entry.citationKey,
        type: 'article-journal'
    };

    // Map entry type
    const typeMap = {
        'article': 'article-journal',
        'book': 'book',
        'inproceedings': 'paper-conference',
        'phdthesis': 'thesis',
        'mastersthesis': 'thesis',
        'techreport': 'report',
        'misc': 'article'
    };
    cslItem.type = typeMap[entry.entryType.toLowerCase()] || 'article';

    // Extract fields
    const fields = entry.entryTags;

    // Title
    if (fields.title) {
        cslItem.title = fields.title.replace(/[{}]/g, '');
    }

    // Authors
    if (fields.author) {
        cslItem.author = parseAuthors(fields.author);
    }

    // Year
    if (fields.year) {
        cslItem.issued = {
            'date-parts': [[parseInt(fields.year)]]
        };
    }

    // Journal/Publisher
    if (fields.journal) {
        cslItem['container-title'] = fields.journal;
    }
    if (fields.booktitle) {
        cslItem['container-title'] = fields.booktitle;
    }

    // Volume
    if (fields.volume) {
        cslItem.volume = fields.volume;
    }

    // Issue/Number
    if (fields.number) {
        cslItem.issue = fields.number;
    }

    // Pages
    if (fields.pages) {
        cslItem.page = fields.pages.replace('--', '-');
    }

    // Publisher
    if (fields.publisher) {
        cslItem.publisher = fields.publisher;
    }

    // DOI
    if (fields.doi) {
        cslItem.DOI = fields.doi;
    }

    // URL
    if (fields.url) {
        cslItem.URL = fields.url;
    }

    return cslItem;
}

// Parse author string into CSL format
function parseAuthors(authorString) {
    const authors = authorString.split(' and ');
    return authors.map(author => {
        author = author.trim().replace(/[{}]/g, '');
        
        // Handle "Last, First" format
        if (author.includes(',')) {
            const parts = author.split(',').map(p => p.trim());
            return {
                family: parts[0],
                given: parts[1]
            };
        }
        
        // Handle "First Last" format
        const parts = author.split(' ');
        if (parts.length >= 2) {
            return {
                family: parts[parts.length - 1],
                given: parts.slice(0, -1).join(' ')
            };
        }
        
        return { family: author };
    });
}

// Load and render publications
async function loadPublications() {
    try {
        // Fetch the BibTeX file
        const response = await fetch('publications.bib');
        const bibtexText = await response.text();
        
        // Parse BibTeX using bibtexParse
        const parsed = bibtexParse.toJSON(bibtexText);
        
        // Convert to CSL-JSON format
        const cslItems = parsed.map(entry => convertBibtexToCSL(entry));
        
        // Sort by year (descending), then by title
        cslItems.sort((a, b) => {
            const yearA = a.issued?.['date-parts']?.[0]?.[0] || 0;
            const yearB = b.issued?.['date-parts']?.[0]?.[0] || 0;
            if (yearB !== yearA) {
                return yearB - yearA;
            }
            return (a.title || '').localeCompare(b.title || '');
        });
        
        // Create citations using CSL
        const citations = renderCitations(cslItems);
        
        // Display publications
        const container = document.getElementById('publications-list');
        container.innerHTML = citations;
        
    } catch (error) {
        console.error('Error loading publications:', error);
        document.getElementById('publications-list').innerHTML = 
            '<p style="color: red;">Error loading publications. Please ensure the page is served from a web server.</p>' +
            '<p>Error details: ' + error.message + '</p>';
    }
}

// Render citations using CiteProc
function renderCitations(cslItems) {
    // Create a simple citation style (APA-like)
    const citeprocSys = {
        retrieveLocale: function(lang) {
            // Return a minimal locale for English
            return `<?xml version="1.0" encoding="utf-8"?>
<locale xmlns="http://purl.org/net/xbiblio/csl" version="1.0" xml:lang="en-US">
  <terms>
    <term name="et-al">et al.</term>
    <term name="and">and</term>
    <term name="page" form="short">p.</term>
    <term name="page" form="short" plural="true">pp.</term>
  </terms>
</locale>`;
        },
        retrieveItem: function(id) {
            return cslItems.find(item => item.id === id);
        }
    };

    // APA-style CSL
    const cslStyle = `<?xml version="1.0" encoding="utf-8"?>
<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0">
  <info>
    <title>APA</title>
    <id>apa</id>
  </info>
  <bibliography>
    <layout>
      <group delimiter=". ">
        <group delimiter=" ">
          <names variable="author">
            <name name-as-sort-order="all" sort-separator=", " initialize-with=". " delimiter=", " delimiter-precedes-last="always"/>
          </names>
          <date variable="issued" prefix="(" suffix=")">
            <date-part name="year"/>
          </date>
        </group>
        <text variable="title"/>
        <group delimiter=", ">
          <text variable="container-title" font-style="italic"/>
          <group delimiter="">
            <text variable="volume" font-style="italic"/>
            <text variable="issue" prefix="(" suffix=")"/>
          </group>
          <text variable="page"/>
        </group>
        <text variable="publisher"/>
      </group>
    </layout>
  </bibliography>
</style>`;

    try {
        const citeproc = new CSL.Engine(citeprocSys, cslStyle);
        citeproc.updateItems(cslItems.map(item => item.id));
        const bibResult = citeproc.makeBibliography();
        
        if (bibResult && bibResult[1]) {
            return '<div class="csl-bib-body">' + bibResult[1].join('') + '</div>';
        }
    } catch (error) {
        console.error('CiteProc error:', error);
    }
    
    // Fallback: simple manual formatting
    return cslItems.map(item => {
        let citation = '<div class="publication">';
        
        // Authors
        if (item.author) {
            const authorNames = item.author.map(a => {
                const given = a.given ? a.given.split(' ').map(n => n[0] + '.').join(' ') : '';
                return `${a.family}, ${given}`;
            }).join(', ');
            citation += `<strong>${authorNames}</strong> `;
        }
        
        // Year
        if (item.issued) {
            citation += `(${item.issued['date-parts'][0][0]}). `;
        }
        
        // Title
        if (item.title) {
            citation += `${item.title}. `;
        }
        
        // Journal/Container
        if (item['container-title']) {
            citation += `<em>${item['container-title']}</em>`;
            
            // Volume and issue
            if (item.volume) {
                citation += `, <em>${item.volume}</em>`;
            }
            if (item.issue) {
                citation += `(${item.issue})`;
            }
            
            // Pages
            if (item.page) {
                citation += `, ${item.page}`;
            }
            citation += '. ';
        }
        
        // Publisher
        if (item.publisher) {
            citation += `${item.publisher}. `;
        }
        
        // DOI link
        if (item.DOI) {
            citation += `<a href="https://doi.org/${item.DOI}" target="_blank" rel="noopener">[Publication]</a> `;
        }
        
        // URL link
        if (item.URL) {
            citation += `<a href="${item.URL}" target="_blank" rel="noopener">[Preprint]</a>`;
        }
        
        citation += '</div>';
        return citation;
    }).join('\n');
}

// Load publications when page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadPublications);
} else {
    loadPublications();
}
