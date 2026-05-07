// ============================================
// MATHS VERTEX - WEBSITE FUNCTIONALITY
// ============================================

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle booking button click
function handleBooking() {
    // Open WhatsApp or redirect to contact
    const whatsappNumber = '919580365233';
    const message = encodeURIComponent('Hi Mohd, I am interested in booking a 1-hour assessment for my child.');
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.trust-card, .target-card, .step, .result-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Track page performance
window.addEventListener('load', function() {
    console.log('Maths Vertex website loaded successfully!');
});

// Smooth navbar color change on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.borderBottomColor = 'rgba(212, 175, 55, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'rgba(26, 58, 92, 1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Add analytics tracking (optional)
function trackEvent(eventName, eventDetails) {
    console.log(`Event: ${eventName}`, eventDetails);
    // This can be connected to Google Analytics or other tracking services
}

// Track CTA clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('CTA_Click', { buttonText: buttonText });
    });
});

// Prevent spam - simple rate limiting for WhatsApp
let lastClickTime = 0;
const clickDelay = 1000; // 1 second

document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime < clickDelay) {
            e.preventDefault();
            console.log('Please wait before clicking again');
            return false;
        }
        lastClickTime = currentTime;
    });
});

// Lazy load images (future optimization)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Accessibility improvements
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
});

console.log('Maths Vertex - All scripts loaded');
