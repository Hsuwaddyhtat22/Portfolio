const navButton = document.querySelector('.menubar');
const navList = document.querySelector('.nav-items');
const navClose = document.querySelector('#nav-close');
const yearLabel = document.querySelector('#year-label');
const client = document.querySelector('#client');
const role = document.querySelector('#role');
const seeProjectBtn1 = document.querySelector('#see-project-btn-1');
const seeProjectBtn2 = document.querySelector('#see-project-btn-2');
const seeProjectBtn3 = document.querySelector('#see-project-btn-3');
const seeProjectBtn4 = document.querySelector('#see-project-btn-4');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');
const menuitems = Array.from(document.querySelectorAll('.menu-items'));

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let isEscape = false;
    if ('key' in evt) {
        isEscape = (evt.key === 'Escape' || evt.key === 'Esc');
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape && modal.classList.contains('show')) {
        modal.classList.toggle('show');
    }
};

navButton.addEventListener('click', () => {
    navList.classList.toggle('show');
});
navClose.addEventListener('click', () => {
    navList.classList.toggle('show');
});
menuitems.forEach((item) => {
    item.addEventListener('click', () => {
        navList.classList.remove('show');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.toggle('show');
});