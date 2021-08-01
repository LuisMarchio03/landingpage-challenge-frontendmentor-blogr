const iconMenu = document.querySelector('#icon-menu');
const iconMenuClose = document.querySelector('#icon-menu-close');
const menuMobile = document.querySelector('#menu-ul');

iconMenu.addEventListener('click', () => {
    menuMobile.style.display = 'block';
    iconMenu.classList.add('invisible');
    iconMenuClose.classList.remove('invisible');
})

iconMenuClose.addEventListener('click', () => {
    menuMobile.style.display = 'none';
    iconMenuClose.classList.add('invisible');
    iconMenu.classList.remove('invisible');
})

