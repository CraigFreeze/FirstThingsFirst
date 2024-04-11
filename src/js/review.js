import { getLocalStorage, renderTemplate, getCalendarLink, constructor } from "./utils.mjs";

const menu = document.querySelector("#hamburger-menu");
const menuUl = document.querySelector(".navigation");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuUl.classList.toggle("active");
});

let plansJSON = getLocalStorage("plans");
plansJSON = JSON.parse(plansJSON);
let plans = plansJSON.plans;

// Calendar Task
// let newCellCalendar = document.createElement("td");
// let calendarTask = document.createElement("a");
// calendarTask.className = "calendarBtn";
// calendarTask.textContent = "Calendar";
// calendarTask.href = getCalendarLink("Read Book", "Do this once a day", 2.5, 10, 30); // Automatically pass in fields to href.
// newCellCalendar.append(calendarTask);
// newRow.append(newCellCalendar);

let wrapper = document.querySelector("#wrapper");
// Expands the plan and the associated tasks into an html template.
function planTemplate(plan) {
  let templatePlan = `
    <div>
        <h2>${plan.planName}</h2>
            <ul>`;

  for (let i = 0; i < plan.tasks.length; i++) {
    templatePlan += `
            <li>Task: #${i + 1} - 
            <a href = ${getCalendarLink(
              plan.tasks[i].taskName +
                " " +
                plan.tasks[i].taskImportance +
                plan.tasks[i].taskUrgency,
              "Role:" +
                plan.tasks[i].taskRole +
                ". Description: " +
                plan.tasks[i].taskDescription
            )}>Calendar Link</a></li>
                <ul>`;
    if (!plan.tasks[i].taskRole == false) {
      templatePlan += `<li><span class="task-subdescription">Role:</span> ${plan.tasks[i].taskRole}</li>`;
    }
    if (!plan.tasks[i].taskName == false) {
      templatePlan += `<li><span class="task-subdescription">Task:</span> ${plan.tasks[i].taskName}</li>`;
    }
    if (!plan.tasks[i].taskImportance == false) {
      templatePlan += `<li><span class="task-subdescription">Importance:</span> ${plan.tasks[i].taskImportance}</li>`;
    }
    if (!plan.tasks[i].taskUrgency == false) {
      templatePlan += `<li><span class="task-subdescription">Urgency:</span> ${plan.tasks[i].taskUrgency}</li>`;
    }
    if (!plan.tasks[i].taskDescription == false) {
      templatePlan += `<li><span class="task-subdescription">Description:</span> ${plan.tasks[i].taskDescription}</li>`;
    }

    templatePlan += `</ul>`;
  }

  templatePlan += `
            </ul>
    </div>
    `;

  return templatePlan;
}

renderTemplate(wrapper, plans, planTemplate);
constructor()
