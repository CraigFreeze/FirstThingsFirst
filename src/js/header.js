const menu = document.querySelector("#hamburger-menu");
const menuUl = document.querySelector(".navigation")

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuUl.classList.toggle("active");
})