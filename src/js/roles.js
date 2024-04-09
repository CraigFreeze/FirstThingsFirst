import { getLocalStorage, renderTemplate, camelize, setLocalStorage } from "./utils.mjs";

let rolesJSON = getLocalStorage("roles");
let roles = JSON.parse(rolesJSON)

// Expands the plan and the associated tasks into an html template.
function inputRolesTemplate(role) {
    // for (let i = 0; i < roles.length; i++) {
    let template =
        `<input class="roles" name=${camelize(role.replace(/[^0-9a-z]/gi, ''))} value="${role}">`
    // }
    return template;
}

let form = document.querySelector("form")
let addRole = document.querySelector("#addRole");
let newRoleName = 0;
addRole.addEventListener("click", (e) => {
    let input = document.createElement("input");
    input.name = newRoleName;
    input.classList.add("roles")
    newRoleName++;
    form.append(input);
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
    console.log("Saved!")
})

form.addEventListener("change", (e) => {
    console.log("NOT SAVED!")
})

let wrapper = document.querySelector(".wrapper")
renderTemplate(wrapper, roles, inputRolesTemplate)



