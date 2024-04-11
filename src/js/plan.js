import Task from "./Task.mjs";
import Plan from "./Plan.mjs";
import {
  getLocalStorage,
  setLocalStorage,
  successfulRes,
  constructor,
  renderTemplate
} from "./utils.mjs";

window.onbeforeunload = function () {
  return "Sure you want to leave?";
};

window.onload = async function () {
  renderQuote(await getQuote(api_proxy_url));
};

const menu = document.querySelector("#hamburger-menu");
const menuUl = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuUl.classList.toggle("active");
});


//? -------------------
const api_proxy_url = "/api/";

async function getQuote(url) {
  const response = await fetch(url);
  console.log(response);
  var data = await response.json();
  console.log(data);
  return await data[0];
}

function renderQuote(quote) {
  console.log("quote")
  console.log(quote)
  document.querySelector("#quote").textContent = quote.q;
  document.querySelector("#quote-author").textContent = `-- ${quote.a}`;
}

// renderQuote(getQuote("https://zenquotes.io/api/random"));


document.querySelector("#newQuote").addEventListener("click", async (e) => {
  renderQuote(await getQuote(api_proxy_url));
})
//? ------------------------

//! ////////////////////////////////////////////////
//! ////////////////////////////////////////////////

// THIS IS A PROXY (SEE VITE CONFIG)
// const api_proxy_url = "/api";

// async function getQuote(url) {
//   console.log(url);
//   const response = await fetch(url);
//   console.log(response);
//   var data = await response.json();;
//   return await data[0];
// }

// function renderQuote(quote) {
//   console.log(quote)
//   document.querySelector("#quote").textContent = quote.q;
//   document.querySelector("#quote-author").textContent = `-- ${quote.a}`;
// }

// // console.log(await getQuote(api_proxy_url))

// renderQuote(getQuote(api_proxy_url));

// document.querySelector("#newQuote").addEventListener("click", async () => {
//   renderQuote(await getQuote(api_proxy_url));
// });

//! ////////////////////////////////////////////////
//! ////////////////////////////////////////////////

function moveTaskUp() {
  //selects the entire row
  const wrapper = this.parentElement.parentElement;

  if (wrapper.previousElementSibling)
    wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
}

function moveTaskDown() {
  //Selects the entire row
  const wrapper = this.parentElement.parentElement;

  if (wrapper.nextElementSibling)
    wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
}

function addMoveTaskEventListeners() {
  let upLink = document.querySelectorAll(".move-up");
  let downLink = document.querySelectorAll(".move-down");

  for (let i = 0; i < upLink.length; i++) {
    upLink[i].addEventListener("click", moveTaskUp);
    downLink[i].addEventListener("click", moveTaskDown);
  }
}

function addTask() {
  // Wrapper
  let newRow = document.createElement("tr");
  newRow.className = "task";

  //Up Down
  let newCellUpDown = document.createElement("td");
  // -----Move Up
  let moveUp = document.createElement("div");
  moveUp.className = "move-up";
  moveUp.innerHTML = "&#9650;";
  newCellUpDown.append(moveUp);

  // -----Move Down
  let moveDown = document.createElement("div");
  moveDown.className = "move-down";
  moveDown.innerHTML = "&#9660;";
  newCellUpDown.append(moveDown);
  //--Up Down
  newRow.append(newCellUpDown);

  // Role Input
  let newCellRole = document.createElement("td");
  let taskRole = document.createElement("input");
  taskRole.type = "text";
  taskRole.className = "task-role";
  taskRole.name = "taskRole";
  taskRole.ariaLabel = "Task Role";
  // "this" comes from the event listener
  taskRole.value =
    this == undefined || this.textContent == "Add" ? "" : this.textContent;

  newCellRole.append(taskRole);
  newRow.append(newCellRole);

  // Name input
  let newCellTaskName = document.createElement("td");
  let taskName = document.createElement("input");
  taskName.type = "text";
  taskName.required = true;
  taskName.className = "task-name";
  taskName.name = "taskName";
  taskName.ariaLabel = "Task Name";
  newCellTaskName.append(taskName);
  newRow.append(newCellTaskName);

  // Description Input
  let newCellDescription = document.createElement("td");
  let taskDescription = document.createElement("textarea");
  // taskDescription.type = "text";
  taskDescription.className = "task-description";
  taskDescription.name = "taskDescription";
  taskDescription.ariaLabel = "Task Description";
  newCellDescription.append(taskDescription);
  newRow.append(newCellDescription);
  // let newCellDescription = document.createElement("td");
  // let taskDescription = document.createElement("input");
  // taskDescription.type = "text";
  // taskDescription.className = "task-description";
  // taskDescription.name = "taskDescription";
  // taskDescription.ariaLabel = "Task Description";
  // newCellDescription.append(taskDescription);
  // newRow.append(newCellDescription);

  // Importance Input
  let newCellImportance = document.createElement("td");
  let taskImportance = document.createElement("input");
  taskImportance.type = "range";
  taskImportance.min = "0";
  taskImportance.max = "5";
  taskImportance.setAttribute("list", "markers");
  taskImportance.className = "task-importance";
  taskImportance.name = "taskImportance";
  taskImportance.ariaLabel = "Task Importance";
  newCellImportance.append(taskImportance);
  newRow.append(newCellImportance);

  // Urgency Input
  let newCellUrgency = document.createElement("td");
  let taskUrgency = document.createElement("input");
  taskUrgency.type = "range";
  taskUrgency.min = "0";
  taskUrgency.max = "5";
  taskUrgency.setAttribute("list", "markers");
  taskUrgency.className = "task-urgency";
  taskUrgency.name = "taskUrgency";
  taskUrgency.ariaLabel = "Task Urgency";
  newCellUrgency.append(taskUrgency);
  newRow.append(newCellUrgency);

  // Remove Task
  let newCellRemove = document.createElement("td");
  let removeTask = document.createElement("a");
  removeTask.className = "remove-task";
  removeTask.innerHTML = "&#x1F5D1;";
  newCellRemove.append(removeTask);
  newRow.append(newCellRemove);

  // Add Task Input
  // let addTask = document.createElement("div");
  // addTask.className = "add-task";
  // addTask.textContent = "+";
  // newLine.append(addTask);

  let table = document.querySelector("#taskForm tbody");
  table.append(newRow);

  newRow.firstChild.firstChild.focus();
  refresh();
}

// function addNewTaskListeners() {
//     let addTask = document.querySelectorAll(".add-task");
//     for (var i = 0; i < addTask.length; i++) {
//         addTask[i].addEventListener("click", addTask)
//     };
// }

document.querySelector(".add-task").addEventListener("click", addTask);

function addRemoveTaskListeners() {
  let removeTask = document.querySelectorAll(".remove-task");
  for (var i = 0; i < removeTask.length; i++) {
    removeTask[i].addEventListener("click", deleteTask);
  }
}

function deleteTask() {
  //Selects the entire row
  const wrapper = this.parentElement.parentElement;
  wrapper.remove();
}

function addRoleListeners() {
  let roleAddTask = document.querySelectorAll(".role");
  for (var i = 0; i < roleAddTask.length; i++) {
    roleAddTask[i].addEventListener("click", addTask);
  }
}

function convertDuration(duration) {
  let deltaHours = Math.floor(duration * 60);
  let deltaMinutes = (duration - deltaHours) * 60;
  return { hour: deltaHours, minutes: deltaMinutes };
}

function submitFormEventListener(form, url) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const prepayload = new FormData(form);

    let planName = prepayload.get("planName");
    let taskRole = prepayload.getAll("taskRole");
    let taskName = prepayload.getAll("taskName");
    let taskImportance = prepayload.getAll("taskImportance");
    let taskUrgency = prepayload.getAll("taskUrgency");
    let taskDescription = prepayload.getAll("taskDescription");

    let tasks = [];

    for (let i = 0; i < taskRole.length; i++) {
      const task = new Task(
        taskRole[i],
        taskName[i],
        taskImportance[i],
        taskUrgency[i],
        taskDescription[i]
      );
      tasks.push(task);
    }

    // console.log(...tasks);

    const plan = new Plan(planName, tasks);

    let plansJSON = getLocalStorage("plans");
    plansJSON = JSON.parse(plansJSON);
    let plans = plansJSON.plans;

    // console.log("plansJSON");
    // console.log(plansJSON);

    // console.log("plans");
    // console.log(plans);

    plans.push(plan);

    setLocalStorage("plans", JSON.stringify(plansJSON));

    let payload = JSON.stringify(plan);
    fetch(url, {
      method: "POST",
      body: payload
    })
      .then((res) => res.json())
      .then((data) =>
        successfulRes(
          "/review/index.html",
          "Successfully Posted (Saved) to Server! You'll be redirected shortly.",
          data
        )
      )
      .catch((err) => console.log(err));
  });
}


// Expands the plan and the associated tasks into an html template.
function liRolesTemplate(role) {
  // for (let i = 0; i < roles.length; i++) {
  let template = `<li class="role">${role}</li>`;
  // }
  return template;
}

let rolesJSON = getLocalStorage("roles");
let roles = JSON.parse(rolesJSON);
const ulRoles = document.querySelector("#rolesWrapper");
renderTemplate(ulRoles, roles, liRolesTemplate);
addTask();
refresh();

function refresh() {
  addMoveTaskEventListeners();
  addRoleListeners();
  addRemoveTaskListeners();
}

submitFormEventListener(
  document.querySelector("form"),
  "/apiPost/"
  // "https://httpbin.org/post"
);

constructor();
