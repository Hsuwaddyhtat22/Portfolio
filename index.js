const Favicon = document.querySelector('.hamburger');
const links = document.querySelectorAll('.nav-ham');
const linksContainer = document.querySelector('.earth');
const closeTag = document.querySelector('.close-tag');
Favicon.addEventListener('click', () => {
    console.log('clicked favicon');
    linksContainer.classList.add('active')
});

closeTag.addEventListener('click', ()=>{
    console.log('clicked closetag')
    linksContainer.classList.remove('active')
})
links.forEach((link) => {
    link.addEventListener('click', () => {
        linksContainer.classList.remove('active')
        console.log(link)
    //   closeMenu();
    });
  });