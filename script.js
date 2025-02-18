// Smooth scroll for in-page navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // Change navbar style on scroll
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  