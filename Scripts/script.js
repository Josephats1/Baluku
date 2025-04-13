document.addEventListener("DOMContentLoaded", function() {
    // ==================== Hamburger Menu Toggle ====================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            // Toggle nav menu
            navLinks.classList.toggle('active');
            
            // Animate hamburger
            hamburger.classList.toggle('active');
            
            // Animate links with staggered delay
            links.forEach((link, index) => {
                if (navLinks.classList.contains('active')) {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                } else {
                    link.style.animation = '';
                }
            });
        });
        
        // Close menu when clicking on links
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                links.forEach(link => {
                    link.style.animation = '';
                });
            });
        });
    }

    // ==================== Typing Effect ====================
    const typingElement = document.querySelector(".typing-effect");
    if (typingElement) {
        const texts = ["Frontend Developer", "UI/UX Designer", "Web Developer"];
        let count = 0;
        let index = 0;
        let currentText = "";
        let letter = "";
        let isDeleting = false;
        let typingSpeed = 100;

        function type() {
            currentText = texts[count];
            
            if (isDeleting) {
                // Deleting text
                letter = currentText.substring(0, index - 1);
                index--;
                typingSpeed = 50;
            } else {
                // Typing text
                letter = currentText.substring(0, index + 1);
                index++;
                typingSpeed = 100;
            }

            typingElement.textContent = letter;
            
            if (!isDeleting && letter === currentText) {
                // Pause at end of typing
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && letter === '') {
                // Switch to next text after deleting
                isDeleting = false;
                count = (count + 1) % texts.length;
                typingSpeed = 500;
            }

            setTimeout(type, typingSpeed);
        }

        // Start the typing effect after a brief delay
        setTimeout(type, 1000);
    }

    // ==================== Footer Year Update ====================
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ==================== Smooth Scrolling ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});