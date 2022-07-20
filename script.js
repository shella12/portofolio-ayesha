const hamburger = document.querySelector('.hamburger');
const navbarMenu = document.querySelector('.mob-nav-ul');

hamburger.addEventListener('click', () => {
  navbarMenu.classList.toggle('mob-nav-ul');
  navbarMenu.classList.toggle('click');
  hamburger.classList.toggle('active');
});
document.querySelectorAll('.mob-nav > ul').forEach((n) => n.addEventListener('click', () => {
  navbarMenu.classList.remove('click');
  navbarMenu.classList.toggle('mob-nav-ul');
  hamburger.classList.remove('active');
}));
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navbarMenu.classList.remove('click');
    navbarMenu.classList.add('mob-nav-ul');
    hamburger.classList.remove('active');
  }
});