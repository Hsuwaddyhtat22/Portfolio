const ham = document.querySelector(".hamburger");
const links = document.querySelector(".earth");

const closetag = document.querySelector(".close-tag");
const navham = document.querySelectorAll(".nav-ham");

ham.addEventListener("click", () => {

    links.classList.toggle("earthClose")
})
closetag.addEventListener("click", () => {

    links.classList.toggle("earthClose")
})