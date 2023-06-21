const ham = document.querySelector(".hamburger");
const links = document.querySelector(".earth");
const closemenu = document.querySelector(".close-tag");
const navham = document.querySelectorAll(".nav-hamClose");
const menuOptions = document.querySelectorAll(".nav-hamClose li a");
const closetag = document.querySelector(".close-tag img");
ham.addEventListener("click", () => {

    links.classList.toggle("earthClose")
})
closetag.addEventListener("click", () => {
    links.classList.add("earthClose");
});
closetag.addEventListener("click", () => {
    links.style.display = "none";
});

menuOptions.forEach((option) => {
    option.addEventListener("click", () => {
        links.classList.add("earthClose");
    });
});

links.style.display = "none";

ham.addEventListener("click", () => {
    if (links.style.display === "none") {
        links.style.display = "flex";
    } else {
        links.style.display = "none";
    }
});

menuOptions.forEach((option) => {
    option.addEventListener("click", () => {

        links.style.display = "none";
    });
});