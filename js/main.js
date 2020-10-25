const menuBtn = document.querySelector('.navbar-hamburger__btn');
const menuNav = document.querySelector('.menu-nav');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.menu-nav__item');


showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuNav.classList.add('open');
        nav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu= true;
    } else {
        menuNav.classList.remove('open');
        nav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu=false;
    }
}

AOS.init();