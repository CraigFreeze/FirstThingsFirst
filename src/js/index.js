import {
    getLocalStorage,
    setLocalStorage,
} from "./utils.mjs";

const menu = document.querySelector("#hamburger-menu");
const menuUl = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    menu.classList.toggle("is-active");
    menuUl.classList.toggle("active");
});

let array = [];
if (getLocalStorage("plans") === null) {
    setLocalStorage("plans", JSON.stringify({ plans: array }));
}
if (getLocalStorage("roles") === null) {
    setLocalStorage("roles", JSON.stringify([]));
}
if (getLocalStorage("visited") === null) {
    console.log("Welcome for the first time!");
    setLocalStorage("visited", true);
}