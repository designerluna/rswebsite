document.addEventListener('DOMContentLoaded', () => {
  // Select all sections/cards for animation
  const animatedElements = document.querySelectorAll('.card, .price-card, .contact-card, .form-card, .hero-content, .hero-image, .about-text, .about-image');
  
  // Add base class for animation
  animatedElements.forEach(el => {
    el.classList.add('fade-up');
  });

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});

