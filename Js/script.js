//NavBar

window.addEventListener("load", () => {
    const logo = document.querySelector(".logo");
    const bounceSound = document.getElementById("bounce-sound");
    bounceSound.play();
    bounceSound.volume = 0.3;
    logo.classList.add("bounce");
});

let lastScrollY = window.scrollY; 
const header = document.querySelector("header");  

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;  
});

// Footer
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar ul');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    const footer = document.querySelector('footer');
    const footerPosition = footer.getBoundingClientRect().top;

    if (footerPosition < window.innerHeight) {
        footer.style.opacity = 1;
        footer.style.transform = 'translateY(0)';
    } else {
        footer.style.opacity = 0;
        footer.style.transform = 'translateY(20px)';
    }
});

// Modo Nocturno

const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    
    // Cambiar el icono del botón según el modo
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = ' '; 
    } else {
        modeToggle.textContent = ' '; 
    }
});