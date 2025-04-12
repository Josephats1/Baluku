     // JavaScript to toggle the hamburger menu
     const hamburger = document.getElementById("hamburger");
     const navbar = document.querySelector(".navbar");

     hamburger.addEventListener("click", () => {
         navbar.classList.toggle("active");
     });
