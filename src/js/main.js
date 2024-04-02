function moveTaskUp() {
    //selects the entire row
    const wrapper = this.parentElement.parentElement;

    console.log(wrapper.previousElementSibling)
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
        upLink[i].addEventListener('click', moveTaskUp);
        downLink[i].addEventListener('click', moveTaskDown);
    }
}

function newTask() {
    // Wrapper
    let newRow = document.createElement("tr");
    newRow.className = "task";

    // Role Input
    let newCellRole = document.createElement("td");
    let taskRole = document.createElement("input");
    taskRole.type = "text";
    taskRole.className = "task-role";
    taskRole.value = (this.textContent == undefined || this.textContent == "Add") ? "" : this.textContent;
    newCellRole.append(taskRole);
    newRow.append(newCellRole);

    // Name input
    let newCellTaskName = document.createElement("td");
    let taskName = document.createElement("input");
    taskName.type = "text";
    taskName.className = "task-name";
    newCellTaskName.append(taskName);
    newRow.append(newCellTaskName);


    // Importance Input
    let newCellImportance = document.createElement("td");
    let taskImportance = document.createElement("input");
    taskImportance.type = "number";
    taskImportance.className = "task-importance";
    newCellImportance.append(taskImportance);
    newRow.append(newCellImportance);


    // Urgency Input
    let newCellUrgency = document.createElement("td");
    let taskUrgency = document.createElement("input");
    taskUrgency.type = "number";
    taskUrgency.className = "task-urgency";
    newCellUrgency.append(taskUrgency);
    newRow.append(newCellUrgency);

    // Description Input
    let newCellDescription = document.createElement("td");
    let taskDescription = document.createElement("input");
    taskDescription.type = "text";
    taskDescription.className = "task-description";
    newCellDescription.append(taskDescription);
    newRow.append(newCellDescription);

    //Up Down
    let newCellUpDown = document.createElement("td");
    // -----Move Up
    let moveUp = document.createElement("a");
    moveUp.className = "move-up";
    moveUp.textContent = "🔼";
    moveUp.href = "#";
    newCellUpDown.append(moveUp);

    // -----Move Down
    let moveDown = document.createElement("a");
    moveDown.className = "move-down";
    moveDown.textContent = "🔽";
    moveDown.href = "#";
    newCellUpDown.append(moveDown);
    //--Up Down
    newRow.append(newCellUpDown);

    // Calendar Task
    let newCellCalendar = document.createElement("td");
    let calendarTask = document.createElement("a");
    calendarTask.className = "calendarBtn";
    calendarTask.textContent = "Calendar";
    calendarTask.href = getCalendarLink("Read Book", "Do this once a day", 2.5, 10, 30); // Automatically pass in fields to href.
    newCellCalendar.append(calendarTask);
    newRow.append(newCellCalendar);

    // Add Task Input
    // let addTask = document.createElement("div");
    // addTask.className = "add-task";
    // addTask.textContent = "+";
    // newLine.append(addTask);

    let table = document.querySelector("#taskForm tbody");
    table.append(newRow);

    newRow.firstChild.firstChild.focus()
    refresh()
}

// // Build inventory items into HTML table components and inject into DOM 
// function addNewTask(data) {
//     // Iterate over all vehicles in the array and put each in a row 
//     data.forEach(function (element) {
//         console.log(element.inv_id + ", " + element.inv_model);
//         dataTable += `<tr><td>${element.inv_make} ${element.inv_model}</td>`;
//         dataTable += `<td><a href='/inv/edit/${element.inv_id}' title='Click to update'>Modify</a></td>`;
//         dataTable += `<td><a href='/inv/delete/${element.inv_id}' title='Click to delete'>Delete</a></td></tr>`;
//     })
//     // Display the contents in the Inventory Management view 
//     inventoryDisplay.append();
// }

function addNewTaskListeners() {
    let addTask = document.querySelectorAll(".add-task");
    for (var i = 0; i < addTask.length; i++) {
        addTask[i].addEventListener('click', newTask)
    };
}

function addRoleListeners() {
    let roleAddTask = document.querySelectorAll(".role");
    for (var i = 0; i < roleAddTask.length; i++) {
        roleAddTask[i].addEventListener('click', newTask)
    };
}

function getCalendarLink(name = "", description, duration = 1, startHour = 9, startMinutes = 0) {
    // defaults
    const date = new Date();
    const year = date.getYear();
    const month = date.getMonth();
    const day = date.getDay();

    let durationDict = convertDuration(duration);
    let endMinutes = startMinutes + durationDict.minutes;
    let endHour = startHour + durationDict.hour;
    let calendarUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${name}&dates=${year}${month}${day}T${startHour}${startMinutes * 60}/${year}${month}${day}T${endHour}${endMinutes}details=${description}`; // location=123%20Main%20St%2C%20Example%2C%20NY
    return calendarUrl;
}

function convertDuration(duration) {
    let deltaHours = Math.floor(duration * 60);
    let deltaMinutes = (duration - deltaHours) * 60;
    return { hour: deltaHours, minutes: deltaMinutes };
}

function refresh() {
    addNewTaskListeners();
    addMoveTaskEventListeners();
    addRoleListeners();
}

function constructor() {
    newTask();
    refresh();
}

constructor();

