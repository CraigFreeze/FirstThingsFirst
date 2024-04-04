// retrieve data from localstorage
export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

// save data to local storage
export function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function renderTemplate(wrapper, data, templateFn, next) {
    const htmlItems = data.map((item) => templateFn(item));
    wrapper.innerHTML = htmlItems.join("");
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
    const template =
        `
    <div class=${plan.planName}>
        <h2>${plan.planName}</h2>
        <ul>
        </ul>
    </div>
    `;
    return template;
}

