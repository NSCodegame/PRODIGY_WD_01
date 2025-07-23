const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // In a real application, you would send the form data to a server here.
    // For this demo, we'll just show a success message.
    
    formStatus.textContent = 'Thank you for your message! We will get back to you shortly.';
    formStatus.style.color = 'green';
    
    contactForm.reset();
    
    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
}); 