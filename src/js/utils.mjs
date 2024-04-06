// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function renderTemplate(wrapper, data, templateFn, next) {
    console.log("data:")
    console.log(data)
    const htmlItems = data.map((item) => templateFn(item));
    if (wrapper === "return") {
        return htmlItems.join("");
    } else {
        wrapper.innerHTML = htmlItems.join("");
    }
}

// ! BUILD THE NEXT FUNCTION SO THAT YOU CAN ADD A FUNCTION TO THE END OF THE NEXT

export function taskTemplate(task) {
    const template =
        `
        <ul>
            <li>${task.taskRole}</li>
            <li>${task.taskName}</li>
            <li>${task.taskImportance}</li>
            <li>${task.taskUrgency}</li>
            <li>${task.taskDescription}</li>
        </ul>
    `;
    return template;
}

export function planTemplate(plan) {
    let templateTasks = "";
    console.log("TASKs:");
    console.log(plan.tasks)
    for (let i = 0; i < plan.tasks.length; i++) {
        console.log("TASK:");
        console.log(plan.tasks[i])
        templateTasks += renderTemplate("return", plan.tasks[i], taskTemplate);
    }

    const templatePlan =
        `
    <div class=${plan.planName}>
        <h2>${plan.planName}</h2>
        <div>
            ${templateTasks}   
        </div>
    </div>
    `;


    return templatePlan;
}

