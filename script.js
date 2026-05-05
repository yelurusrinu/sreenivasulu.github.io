// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal — Apple-style fade/translate as elements enter the viewport
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.getElementById('primary-nav');

if (menuToggle && primaryNav) {
  const setOpen = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    primaryNav.dataset.open = String(open);
  };
  menuToggle.addEventListener('click', () => {
    setOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  // Close menu after clicking a link
  primaryNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setOpen(false);
  });
}
