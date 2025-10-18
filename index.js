// Citali App Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    initializePage();
    
    // Add click tracking for download buttons
    trackDownloadClicks();
    
    // Add smooth scrolling for better UX
    addSmoothScrolling();
    
    // Add device detection for better UX
    detectUserDevice();
});

function initializePage() {
    console.log('Citali Landing Page loaded successfully');
    
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.main-content, .footer');
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function trackDownloadClicks() {
    const iosButton = document.querySelector('.ios-btn');
    const androidButton = document.querySelector('.android-btn');
    
    if (iosButton) {
        iosButton.addEventListener('click', function(e) {
            console.log('iOS download button clicked');
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Track the click (you can integrate with analytics here)
            trackEvent('download_click', 'ios');
        });
    }
    
    if (androidButton) {
        androidButton.addEventListener('click', function(e) {
            console.log('Android download button clicked');
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Track the click (you can integrate with analytics here)
            trackEvent('download_click', 'android');
        });
    }
}

function addSmoothScrolling() {
    // Add smooth scrolling for any internal links (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function detectUserDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Detect iOS
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        highlightButton('.ios-btn');
        console.log('iOS device detected');
    }
    // Detect Android
    else if (/android/i.test(userAgent)) {
        highlightButton('.android-btn');
        console.log('Android device detected');
    }
}

function highlightButton(selector) {
    const button = document.querySelector(selector);
    if (button) {
        // Add a subtle glow effect to the relevant button
        button.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.5)';
        button.style.border = '2px solid rgba(102, 126, 234, 0.3)';
        button.style.borderRadius = '12px';
    }
}

function trackEvent(eventName, platform) {
    // This function can be used to integrate with analytics services
    // like Google Analytics, Mixpanel, etc.
    
    const eventData = {
        event: eventName,
        platform: platform,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer
    };
    
    console.log('Event tracked:', eventData);
    
    // Example: Send to Google Analytics (uncomment if you have GA setup)
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, {
    //         'custom_parameter_1': platform,
    //         'custom_parameter_2': 'landing_page'
    //     });
    // }
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Allow Enter key to activate focused download buttons
    if (e.key === 'Enter') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('download-btn')) {
            focusedElement.click();
        }
    }
});

