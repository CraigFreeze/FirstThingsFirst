import { getLocalStorage, renderTemplate, camelize, setLocalStorage } from "./utils.mjs";

let rolesJSON = getLocalStorage("roles");
let roles = JSON.parse(rolesJSON)

// Expands the plan and the associated tasks into an html template.
function inputRolesTemplate(role) {
    // for (let i = 0; i < roles.length; i++) {
    let template =
        `<input class="roles" aria-label="Role" type="text" name=${camelize(role.replace(/[^0-9a-z]/gi, ''))} value="${role}">`
    // }
    return template;
}

let form = document.querySelector("form")
let inputWrapper = document.querySelector(".input-wrapper")
let addRole = document.querySelector("#addRole");
let newRoleName = 0;
addRole.addEventListener("click", (e) => {
    let input = document.createElement("input");
    input.name = newRoleName;
    input.classList.add("roles")
    input.type = "text";
    newRoleName++;
    inputWrapper.appendChild(input);
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let rolesElements = document.querySelectorAll(".roles")
    let roles = []
    rolesElements.forEach((role) => {
        if (!role.value == false) {
            roles.push(role.value)
        }
    });
    setLocalStorage("roles", JSON.stringify(roles));

    let rolesJSON = getLocalStorage("roles");
    let newRoles = JSON.parse(rolesJSON)
    renderTemplate(wrapper, newRoles, inputRolesTemplate)
    console.log("Saved!")
})

form.addEventListener("change", (e) => {
    console.log("NOT SAVED!")
})

let wrapper = document.querySelector(".roles-wrapper")
renderTemplate(wrapper, roles, inputRolesTemplate)

// document.querySelector("#refreshRoles").addEventListener("click", (e) => {

// })

