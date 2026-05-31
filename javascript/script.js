window.addEventListener("load", function () {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    const main = document.getElementById("main");
    if (loader) {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }
    if (main) {
      main.style.display = "block";
      setTimeout(() => {
        main.classList.add("loaded");
        revealElements();
      }, 50);
    }
  }, 1200);
});

// Scroll Event Handlers
window.addEventListener("scroll", function () {
  const header = document.querySelector("nav");
  if (header) {
    header.classList.toggle("sticky", window.scrollY > 0);
  }
  
  // Scroll Spy for Nav Active Links
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  let current = "";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 180)) {
      current = section.getAttribute("id");
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
  
  revealElements();
});

// Scroll Reveal
function revealElements() {
  const reveals = document.querySelectorAll(".fade-up-element");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 80;
    
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("visible");
    }
  });
}

// Interactive Mobile Menu and Projects Filter
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll("nav ul li a");
  
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navToggle.classList.toggle("open");
      navMenu.classList.toggle("open");
    });
    
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navToggle.classList.remove("open");
        navMenu.classList.remove("open");
      });
    });
  }
  
  // Projects Filtering System
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const filterValue = e.currentTarget.getAttribute("data-filter");
      filterProjects(filterValue);
    });
  });
});

function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    const categories = card.getAttribute("data-category").split(" ");
    if (category === "all" || categories.includes(category)) {
      card.style.display = "flex";
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0) scale(1)";
      }, 50);
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px) scale(0.95)";
      setTimeout(() => {
        card.style.display = "none";
      }, 300);
    }
  });
}
