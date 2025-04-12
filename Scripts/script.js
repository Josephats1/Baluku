
    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    
    hamburger.addEventListener('click', () => {
        // Toggle nav menu
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        hamburger.classList.toggle('active');
        
        // Animate links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
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
    
    <script>
    const words = ["Developer", "Designer", "Innovator"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    function type() {
        const typingEffect = document.querySelector(".typing-effect");
        if (i < words.length) {
            if (!isDeleting && j <= words[i].length) {
                currentWord = words[i].substring(0, j++);
            } else if (isDeleting && j >= 0) {
                currentWord = words[i].substring(0, j--);
            }

            typingEffect.innerHTML = `<span style="color: deeppink;">${currentWord}</span>`;

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && j === words[i].length) {
                speed = 1500;
                isDeleting = true;
            } else if (isDeleting && j === 0) {
                isDeleting = false;
                i = (i + 1) % words.length;
                speed = 500;
            }

            setTimeout(type, speed);
        }
    }

    document.addEventListener("DOMContentLoaded", type);
</script>

        
        // Set current year in footer
        document.getElementById('year').textContent = new Date().getFullYear();
    });