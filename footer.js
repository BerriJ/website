// Shared footer content
const footerHTML = `
  <footer>
    <div class="container">
      <p>&copy; 2025 Jonathan Berrisch · <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank"
          rel="noopener">CC BY-NC 4.0</a></p>
      <div class="social-links">
        <a href="https://orcid.org/0000-0002-4944-9074" target="_blank" rel="noopener" title="ORCID">
          <span class="social-label">ORCID</span>
          <i data-lucide="book-open"></i>
        </a>
        <a href="https://github.com/BerriJ" target="_blank" rel="noopener" title="GitHub">
          <span class="social-label">GitHub</span>
          <i data-lucide="github"></i>
        </a>
        <a href="https://stackoverflow.com/users/9551847/berrij" target="_blank" rel="noopener" title="Stack Overflow">
          <span class="social-label">Stack Overflow</span>
          <i data-lucide="layers"></i>
        </a>
        <a href="mailto:jonathan@berrisch.biz" title="Email">
          <span class="social-label">Email</span>
          <i data-lucide="mail"></i>
        </a>
      </div>
    </div>
  </footer>
`;

// Insert footer before the first script tag in body
document.body.insertAdjacentHTML('beforeend', footerHTML);
