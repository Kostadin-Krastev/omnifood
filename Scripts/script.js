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

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
