// Load navigation and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Determine the correct base path
    const pathDepth = window.location.pathname.split('/').filter(p => p && p !== 'index.html').length;
    const basePath = pathDepth > 1 ? '../'.repeat(pathDepth - 1) : '';
    
    // Load navigation
    fetch(basePath + 'nav.html')
        .then(response => response.text())
        .then(data => {
            const navPlaceholder = document.getElementById('nav-placeholder');
            if (navPlaceholder) {
                navPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading navigation:', error));

    // Load footer
    fetch(basePath + 'footer.html')
        .then(response => response.text())
        .then(data => {
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});