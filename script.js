document.querySelector('.hamburger-menu').addEventListener('click', function() {
  this.classList.toggle('change');
  document.querySelector('.nav-links').classList.toggle('active');
});