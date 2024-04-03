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
    // "this" comes from the event listener
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

    // Remove Task
    let newCellRemove = document.createElement("td");
    let removeTask = document.createElement("a");
    removeTask.className = "remove-task";
    removeTask.textContent = "Remove";
    newCellRemove.append(removeTask);
    newRow.append(newCellRemove);

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


function addNewTaskListeners() {
    let addTask = document.querySelectorAll(".add-task");
    for (var i = 0; i < addTask.length; i++) {
        addTask[i].addEventListener('click', newTask)
    };
}

function addRemoveTaskListeners() {
    let removeTask = document.querySelectorAll(".remove-task");
    for (var i = 0; i < removeTask.length; i++) {
        removeTask[i].addEventListener('click', deleteTask)
    };
}

function deleteTask() {
    //Selects the entire row
    const wrapper = this.parentElement.parentElement;
    wrapper.remove()
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
    addRemoveTaskListeners()
}

function constructor() {
    newTask();
    refresh();
}

constructor();

