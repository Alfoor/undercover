document.addEventListener("DOMContentLoaded", function() {
    const transitionEl = document.getElementById("page-transition");
  
    // Remove transition overlay on load
    setTimeout(() => {
      transitionEl.classList.remove("active");
    }, 100);
  
    // Smooth scroll for in-page anchor links (e.g., #about)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Page transitions for internal .html links
    document.querySelectorAll('a[href$=".html"]').forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        transitionEl.classList.add("active");
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Duration matches CSS transition
      });
    });
  
    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  });
  