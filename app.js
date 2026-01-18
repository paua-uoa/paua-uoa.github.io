const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-nav");
const mobileNav = document.querySelector('#mobile-nav');
const overlay = document.querySelector('.mobile-overlay');


toggle.addEventListener('click', () => {
  const isOpen = toggle.classList.toggle('is-open');
  mobileNav.classList.toggle('is-open', isOpen);
  overlay.classList.toggle('is-open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

// close when clicking overlay
overlay.addEventListener('click', () => {
  toggle.classList.remove('is-open');
  mobileNav.classList.remove('is-open');
  overlay.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', false);
});
// close when clicking nav item
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('is-open');
    mobileNav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', false);
  });
});
