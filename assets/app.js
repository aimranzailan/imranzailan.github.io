const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu-list')
const menuBackground = document.querySelector('.navbar__menu')
const navbarToggle = document.querySelector('.navbar__toggle')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    navbarToggle.classList.toggle('active')
    menuBackground.classList.toggle('active')
});