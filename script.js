// script.js

// 1. AOS Initialization is handled via script tag in HTML

// 2. Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations if available
    if (window.AOS && typeof AOS.init === 'function') {
        AOS.init();
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('.main-nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            // Toggles the 'active' class on the menu for mobile view
            navUl.classList.toggle('active'); 
        });
    }
});


// 3. Skill Bar Animation on Scroll (Intersection Observer)
// This function ensures the skill bars only fill up when the user scrolls to the section.

const skillSection = document.getElementById('skills');

if (skillSection) {
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the target is visible
    };

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is visible, start the animation
                const bars = document.querySelectorAll('.progress-bar');
                bars.forEach(bar => {
                    // Get the specific width percentage from the data-width attribute
                    const targetWidth = bar.getAttribute('data-width');
                    // Set the width, triggering the CSS transition
                    bar.style.width = targetWidth;
                });
                
                // Stop observing once the animation has run to avoid re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillObserver.observe(skillSection);
}