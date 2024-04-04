import Task from "./Task.mjs";
import Plan from "./Plan.mjs";
import { getLocalStorage, setLocalStorage, renderTemplate, taskTemplate, planTemplate } from "./utils.mjs";

let plansJSON = getLocalStorage("plans");
plansJSON = JSON.parse(plansJSON)

let plans = plansJSON.plans
// console.log(plansJSON.plans)

let wrapper = document.querySelector("#wrapper")

renderTemplate(wrapper, plans, planTemplate)

// let planContainer = document.querySelector(`div.${plan.planName}`)

// renderTemplate(planContainer, task, taskTemplate)


// for(let plan in plans){
//     renderTemplate(wrapper, plan, planTemplate)
//     for(let task in plan.tasks){
//         let planContainer = document.querySelector(`.${plan.planName} div`)
//         renderTemplate(planContainer, task, taskTemplate)
//     }
// }



