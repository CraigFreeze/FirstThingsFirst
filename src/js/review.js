import Task from "./Task.mjs";
import Plan from "./Plan.mjs";
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

let plansJSON = getLocalStorage("plans");
plansJSON = JSON.parse(plansJSON)
console.log(plansJSON.plans)




