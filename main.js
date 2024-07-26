// NAVBAR VISIBILITY AND INVISIBILITY
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Downscroll
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Upscroll
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// WAVING HAND ANIMATION
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const wavingHand = document.getElementById('waving-hand');

    // Add or remove the animation class to control the animation
    setInterval(() => {
        if (wavingHand.style.animation) {
            wavingHand.style.animation = '';
        } else {
            wavingHand.style.animation = 'wave 2s infinite';
        }
    }, 2000);
});

// Mobile Menu Toggle
// const menuToggle = document.getElementById('menu-toggle');
// const mobileMenu = document.getElementById('mobile-menu');
// menuToggle.addEventListener('click', () => {
//     mobileMenu.classList.toggle('hidden');
// });

document.getElementById('menu-button').addEventListener('click', function () {
    document.body.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
});

// FADE UP
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-content');
    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-up');
        }, index * 200); // Stagger animation start times
    });
});

// Navigation Links




