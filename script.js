window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // If the user scrolls more than 50px, add the 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});