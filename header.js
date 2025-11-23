// Shared header content
const headerHTML = `
  <header>
    <div class="container">
      <div class="header-links initial-show">
        <a href="index.html" title="About">
          <span class="header-label">About</span>
          <i data-lucide="home"></i>
        </a>
        <a href="projects.html" title="Projects">
          <span class="header-label">Projects</span>
          <i data-lucide="folder-open"></i>
        </a>
        <a href="cv/index.html" title="CV">
          <span class="header-label">CV</span>
          <i data-lucide="file-text"></i>
        </a>
      </div>
    </div>
  </header>
`;

// Insert header at the beginning of body
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// Show header labels for 2 seconds on page load
setTimeout(() => {
  const headerLinks = document.querySelector('.header-links');
  if (headerLinks) {
    headerLinks.classList.remove('initial-show');
  }
}, 2000);
