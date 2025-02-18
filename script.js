document.addEventListener("DOMContentLoaded", function() {
    const transitionEl = document.getElementById("page-transition");
  
    // Remove transition overlay on load
    setTimeout(() => {
      transitionEl.classList.remove("active");
    }, 100);
  
    // Page transitions for internal links
    document.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");
        if (href && href.endsWith(".html")) {
          e.preventDefault();
          transitionEl.classList.add("active");
          setTimeout(() => {
            window.location.href = href;
          }, 500); // Duration matches CSS transition
        }
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
  