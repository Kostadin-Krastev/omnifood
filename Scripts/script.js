// Change dynamically the year in the footer
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Open/Close Mobile navigation
const headerEl = document.querySelector('.header');
const mobileMenuButton = document.querySelector('.btn-mobile-nav');

mobileMenuButton.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

// Close Mobile navigation when one of list items is clicked
const allLinks = document.querySelectorAll('.main-nav-link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    headerEl.classList.remove('nav-open');
  });
});

// Make the navigation sticky
const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    console.log(entry);
    if (entry.isIntersecting === false) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  },
  {
    root: null, // null is the viewport - it means in the viewport
    threshold: 0,
    rootMargin: '-80px',
  },
);
observer.observe(sectionHeroEl);
