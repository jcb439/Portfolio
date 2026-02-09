// Load navigation and footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Determine if we're in a subfolder (like projects/)
    const path = window.location.pathname;
    const isInSubfolder = path.includes('/projects/');
    const basePath = isInSubfolder ? '../' : '';
    
    // Load navigation
    fetch(basePath + 'nav.html')
        .then(response => response.text())
        .then(data => {
            const navPlaceholder = document.getElementById('nav-placeholder');
            if (navPlaceholder) {
                navPlaceholder.innerHTML = data;
                
                // Fix navigation links if we're in a subfolder
                if (isInSubfolder) {
                    const navLinks = navPlaceholder.querySelectorAll('a');
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && !href.startsWith('http') && !href.startsWith('../')) {
                            link.setAttribute('href', '../' + href);
                        }
                    });
                }
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
                
                // Fix footer links if we're in a subfolder
                if (isInSubfolder) {
                    const footerLinks = footerPlaceholder.querySelectorAll('a');
                    footerLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && !href.startsWith('http') && !href.startsWith('../')) {
                            link.setAttribute('href', '../' + href);
                        }
                    });
                }
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});