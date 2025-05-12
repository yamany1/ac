document.addEventListener('DOMContentLoaded', function() {
    // Burger Menu Toggle
    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');
    
    burgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navList.classList.remove('active');
            burgerMenu.classList.remove('active');
        });
    });
    
    // Animation triggers
    const animateElements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
    
    const animateOnScroll = function() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.animationDelay = (element.dataset.delay || '0') + 's';
                element.classList.add('animate');
            }
        });
    };
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});