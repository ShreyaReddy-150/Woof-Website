// script.js

const navbarHeight = document.querySelector('nav').offsetHeight;

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    
    let targetPosition = target.offsetTop;

    // Only apply offset if not the top section
    if (this.getAttribute('href') !== "#landingPageSection") {
      targetPosition -= navbarHeight;
    }

    // Scroll to the target position with an offset for the navbar
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });

    // Remove bounce class, re-trigger the animation
    target.classList.remove('bounce');
    // Trigger reflow to restart animation
    void target.offsetWidth; // This forces a reflow and restarts the animation
    target.classList.add('bounce');
  });
});

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', function () {
  const target = document.querySelector('#landingPageSection');
  window.scrollTo({
    top: Math.max(0, target.offsetTop),
    behavior: 'smooth'
  });
});

