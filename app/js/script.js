const btnMenu = document.querySelector('#btnMenu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnMenu.addEventListener('click', function () {
    console.log("open menu");

    if (header.classList.contains('open')) { // Close the Menu
        body.classList.remove('lockScroll');
        header.classList.remove('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    } else { // Open Menu
        body.classList.add('lockScroll');
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }
});