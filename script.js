const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav-links');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', open);
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.reveal').forEach(element => {
  new IntersectionObserver(([entry], observer) => {
    if (entry.isIntersecting) { element.classList.add('visible'); observer.unobserve(element); }
  }, { threshold: 0.14 }).observe(element);
});

const year = new Date().getFullYear();
document.querySelector('#year').textContent = year;
document.querySelector('#copyright-year').textContent = year;
