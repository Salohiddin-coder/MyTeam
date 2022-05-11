var elButton = document.querySelector('.site-header__button');
var elNavbar = document.querySelector('.navbar');

elButton.addEventListener('click', function() {
  elNavbar.classList.toggle('navbar--open');
});