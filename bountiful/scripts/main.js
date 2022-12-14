const hamButton = document.querySelector(".menu");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {mainNav.classList.toggle("responsive")}, false);

window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove("responsive")};


document.querySelectorAll(".navLink").forEach(link => {
    if(link.href === window.location.href){
        link.setAttribute("aria-current", "page")
    }
});