// EnduranceLab Datenschutzerklärung - JavaScript für bessere UX

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling für interne Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Back to top button
    createBackToTopButton();

    // Print functionality
    addPrintButton();

    // Dark mode toggle (optional)
    addDarkModeToggle();

    // Section highlighting on scroll
    highlightCurrentSection();

    // Copy email addresses functionality
    addEmailCopyFunctionality();
});

function createBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Nach oben scrollen');
    
    // Styles for the button
    Object.assign(backToTopButton.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#667eea',
        color: 'white',
        fontSize: '20px',
        cursor: 'pointer',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: '1000',
        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
    });

    document.body.appendChild(backToTopButton);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Hover effects
    backToTopButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#5a67d8';
        this.style.transform = 'scale(1.1)';
    });

    backToTopButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#667eea';
        this.style.transform = 'scale(1)';
    });
}

function addPrintButton() {
    const printButton = document.createElement('button');
    printButton.innerHTML = '🖨️ Drucken';
    printButton.className = 'print-button';
    
    Object.assign(printButton.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '10px 15px',
        backgroundColor: '#48bb78',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '1000',
        boxShadow: '0 2px 8px rgba(72, 187, 120, 0.3)',
        transition: 'all 0.2s ease'
    });

    document.body.appendChild(printButton);

    printButton.addEventListener('click', function() {
        window.print();
    });

    printButton.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#38a169';
        this.style.transform = 'translateY(-2px)';
    });

    printButton.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#48bb78';
        this.style.transform = 'translateY(0)';
    });
}

function addDarkModeToggle() {
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.setAttribute('aria-label', 'Dark mode umschalten');
    
    Object.assign(darkModeToggle.style, {
        position: 'fixed',
        top: '20px',
        right: '140px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: '#4a5568',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        zIndex: '1000',
        boxShadow: '0 2px 8px rgba(74, 85, 104, 0.3)',
        transition: 'all 0.2s ease'
    });

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        this.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // Hover effects for dark mode toggle
    darkModeToggle.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#2d3748';
        this.style.transform = 'scale(1.1)';
    });

    darkModeToggle.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#4a5568';
        this.style.transform = 'scale(1)';
    });
}

function highlightCurrentSection() {
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all sections
                sections.forEach(section => section.classList.remove('active'));
                // Add active class to current section
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
}

function addEmailCopyFunctionality() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            
            // Copy to clipboard
            navigator.clipboard.writeText(email).then(function() {
                // Show temporary success message
                showNotification('E-Mail-Adresse kopiert: ' + email);
            }).catch(function() {
                // Fallback: open email client
                window.location.href = this.href;
            }.bind(this));
        });
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.className = 'notification';
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '80px',
        right: '20px',
        padding: '12px 20px',
        backgroundColor: '#48bb78',
        color: 'white',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: '500',
        zIndex: '1001',
        boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for dark mode
const darkModeCSS = `
    [data-theme="dark"] {
        --bg-color: #1a202c;
        --text-color: #e2e8f0;
        --section-bg: #2d3748;
        --border-color: #4a5568;
        --accent-color: #81c784;
    }

    [data-theme="dark"] body {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    [data-theme="dark"] .content {
        background-color: var(--section-bg);
        color: var(--text-color);
    }

    [data-theme="dark"] .section {
        border-bottom-color: var(--border-color);
    }

    [data-theme="dark"] .section h2 {
        color: var(--text-color);
        border-bottom-color: var(--accent-color);
    }

    [data-theme="dark"] .section h3 {
        color: var(--text-color);
    }

    [data-theme="dark"] .section p,
    [data-theme="dark"] .section li {
        color: var(--text-color);
    }

    [data-theme="dark"] .meta-info {
        background-color: #4a5568;
        border-left-color: var(--accent-color);
    }

    [data-theme="dark"] a {
        color: var(--accent-color);
    }

    [data-theme="dark"] .footer {
        background-color: #1a202c;
    }

    /* Delete Account Page Dark Mode Styles */
    [data-theme="dark"] .navigation {
        background-color: #2d3748;
        border-left-color: #81c784;
    }

    [data-theme="dark"] .nav-link {
        color: #81c784;
    }

    [data-theme="dark"] .nav-link:hover {
        color: #68d391;
    }

    [data-theme="dark"] .warning-box {
        background-color: #2d1b1b;
        border-color: #e53e3e;
        border-left-color: #e53e3e;
    }

    [data-theme="dark"] .warning-box h2 {
        color: #fc8181;
    }

    [data-theme="dark"] .warning-box p {
        color: #fed7d7;
    }

    [data-theme="dark"] .step {
        background-color: #2d3748;
        border-left-color: #81c784;
    }

    [data-theme="dark"] .step-number {
        background-color: #81c784;
        color: #1a202c;
    }

    [data-theme="dark"] .step-content h3 {
        color: #e2e8f0;
    }

    [data-theme="dark"] .step-content p {
        color: #a0aec0;
    }

    [data-theme="dark"] .data-category:first-child {
        background-color: #1a2e1a;
        border-color: #38a169;
    }

    [data-theme="dark"] .data-category:first-child h3 {
        color: #68d391;
    }

    [data-theme="dark"] .data-category:last-child {
        background-color: #2d1b1b;
        border-color: #e53e3e;
    }

    [data-theme="dark"] .data-category:last-child h3 {
        color: #fc8181;
    }

    [data-theme="dark"] .data-category {
        background-color: #2d3748;
        border-color: #4a5568;
    }

    [data-theme="dark"] .data-category h3 {
        color: #e2e8f0;
    }

    [data-theme="dark"] .data-category p,
    [data-theme="dark"] .data-category li {
        color: #a0aec0;
    }

    [data-theme="dark"] .tech-details {
        background-color: #2d3748;
        border-left-color: #81c784;
    }

    [data-theme="dark"] .tech-details h3 {
        color: #e2e8f0;
    }

    [data-theme="dark"] .tech-details p,
    [data-theme="dark"] .tech-details li {
        color: #a0aec0;
    }

    [data-theme="dark"] .contact-method {
        background-color: #2d3748;
        border-left-color: #68d391;
    }

    [data-theme="dark"] .contact-method h3 {
        color: #e2e8f0;
    }

    [data-theme="dark"] .contact-method p {
        color: #a0aec0;
    }

    [data-theme="dark"] .legal-info {
        background-color: #2d3748;
        border-left-color: #81c784;
    }

    [data-theme="dark"] .legal-info h3 {
        color: #e2e8f0;
    }

    [data-theme="dark"] .legal-info p,
    [data-theme="dark"] .legal-info li {
        color: #a0aec0;
    }

    [data-theme="dark"] .faq-item {
        background-color: #2d3748;
        border-left-color: #68d391;
    }

    [data-theme="dark"] .faq-item h3 {
        color: #e2e8f0;
    }

    [data-theme="dark"] .faq-item p {
        color: #a0aec0;
    }

    [data-theme="dark"] .final-warning {
        background-color: #2d1b1b;
        border-color: #e53e3e;
        border-left-color: #e53e3e;
    }

    [data-theme="dark"] .final-warning h2 {
        color: #fc8181;
    }

    [data-theme="dark"] .final-warning p {
        color: #fed7d7;
    }

    [data-theme="dark"] .final-warning ul {
        color: #fed7d7;
    }
`;

// Inject dark mode CSS
const style = document.createElement('style');
style.textContent = darkModeCSS;
document.head.appendChild(style);

// Add CSS for active section highlighting
const activeSectionCSS = `
    .section.active h2 {
        color: #667eea;
        transform: translateX(10px);
        transition: all 0.3s ease;
    }
`;

const activeStyle = document.createElement('style');
activeStyle.textContent = activeSectionCSS;
document.head.appendChild(activeStyle);
