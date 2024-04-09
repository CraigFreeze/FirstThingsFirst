import { getLocalStorage, renderTemplate } from "./utils.mjs";

let plansJSON = getLocalStorage("plans");
plansJSON = JSON.parse(plansJSON)
let plans = plansJSON.plans


let wrapper = document.querySelector("#wrapper")
// Expands the plan and the associated tasks into an html template.
function planTemplate(plan) {
    let templatePlan =
        `
    <div class=${plan.planName}>
        <h2>${plan.planName}</h2>
        <div>
            <ul>`

    for (let i = 0; i < plan.tasks.length; i++) {
        templatePlan +=
            `
            <li>Task Number ${i}:</li>
                <ul>`
        if (!plan.tasks[i].taskRole == false) {
            templatePlan += `<li><span class="task-subdescription">Role:</span> ${plan.tasks[i].taskRole}</li>`
        }
        if (!plan.tasks[i].taskName == false) {
            templatePlan += `<li><span class="task-subdescription">Task:</span> ${plan.tasks[i].taskName}</li>`
        }
        if (!plan.tasks[i].taskImportance == false) {
            templatePlan += `<li><span class="task-subdescription">Importance:</span> ${plan.tasks[i].taskImportance}</li>`
        }
        if (!plan.tasks[i].taskUrgency == false) {
            templatePlan += `<li><span class="task-subdescription">Urgency:</span> ${plan.tasks[i].taskUrgency}</li>`
        }
        if (!plan.tasks[i].taskDescription == false) {
            templatePlan += `<li><span class="task-subdescription">Description:</span> ${plan.tasks[i].taskDescription}</li>`
        }
                    
        templatePlan += `</ul>`
    }

    templatePlan += `
            </ul>
        </div>
    </div>
    `;


    return templatePlan;
}

renderTemplate(wrapper, plans, planTemplate)



