// script.js

// Initialize AOS animations
AOS.init({
  duration: 800,
  once: false,
  mirror: false
});

// Dark / Light mode toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Sticky Navbar background change on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    nav.classList.add('shadow');
  } else {
    nav.classList.remove('shadow');
  }
  // scroll to top button
  const btn = document.getElementById('scrollTopBtn');
  btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});

// Scroll to top functionality
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Counter animation for statistics
const counters = document.querySelectorAll('.counter');
const speed = 200;

const runCounter = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const updateCount = () => {
      const current = +counter.innerText;
      const increment = target / speed;
      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

// Use Intersection Observer to trigger counter when visible
const statSection = document.querySelector('.bg-primary');
if (statSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounter();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  observer.observe(statSection);
}

// Active navigation based on scroll (simple highlight)
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector(`.navbar-nav a[href="#${sectionId}"]`);
    if (link && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// FAQ accordion (Bootstrap handles it, but we ensure smooth)
// Search bar simple alert
document.querySelector('.search-icon')?.addEventListener('click', () => {
  alert('Search feature coming soon!');
});

// Mobile menu close on link click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse.classList.contains('show')) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

console.log('EduNexus LMS ready - beginner friendly code!');