const Favicon = document.querySelector('.hamburger');
const links = document.querySelector('.nav-ham');
const linksContainer = document.querySelector('.earth');
Favicon.addEventListener('click', () => {
    console.log('clicked');
    links.classList.toggle('active')
});