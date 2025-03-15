// Smooth Scroll and Animations
ScrollReveal().reveal('.hero, .section', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 100,
});

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});