// script.js

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const themeLabel = document.querySelector('.theme-toggle-label');

    const applyTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        if (themeLabel) {
            themeLabel.textContent = theme === 'light' ? 'White' : 'Navy';
        }
    };

    const savedTheme = localStorage.getItem('portfolio-theme') || 'navy';
    applyTheme(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = body.getAttribute('data-theme') === 'light' ? 'navy' : 'light';
            applyTheme(nextTheme);
            localStorage.setItem('portfolio-theme', nextTheme);
        });
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Typing Effect for Hero Subtitle
    const subtitleElement = document.querySelector('.hero-subtitle');
    const subtitleText = subtitleElement.textContent;
    subtitleElement.textContent = '';

    let i = 0;
    function typeWriter() {
        if (i < subtitleText.length) {
            subtitleElement.textContent += subtitleText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    // Start typing effect after a slight delay
    setTimeout(typeWriter, 500);

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section-title, .about-text, .stat-item, .highlight-box, .skill-category, .timeline-item, .project-card, .contact-item, .contact-form');

    animatedElements.forEach(el => {
        el.classList.add('fade-element');
        observer.observe(el);
    });
});
