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
    if (wrapper === "return") {
        return htmlItems.join("");
    } else {
        wrapper.innerHTML = htmlItems.join("");
    }
}

export function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

const delay = async (ms) =>  new Promise(res => setTimeout(res, ms));

export async function successfulRes(redirect, message, data = "") {
    console.log(message, data);
    alertMessage(message);
    await delay(5000);
    window.location.href = redirect;
}

export function getCalendarLink(name = "", description) {
    let calendarUrl = `http://www.google.com/calendar/event?action=TEMPLATE&text=${name}&details=${description}`;
    calendarUrl = calendarUrl.replace(/ /g, "%20");
    return calendarUrl;
}

export function alertMessage(message, scroll = true) {
    // create element to hold our alert
    const main = document.querySelector("main");
    const alert = document.createElement("div");
    const alertContent = document.createElement("div");
    const alertClose = document.createElement("div");

    // add a class to style the alert
    alert.classList.add("alert");
    alertContent.textContent = message;
    alertClose.innerHTML = "&times;";

    // add a listener to the alert to see if they clicked on the X
    // if they did then remove the child
    alertClose.addEventListener("click", function (e) {
        alert.remove();
    })
    // add the alert to the top of main
    alert.append(alertContent);
    alert.append(alertClose);
    main.prepend(alert);

    // Scroll to top of screen
    if (scroll)
        window.scrollTo(0, 0);
}




export function constructor() {
    let array = [];
    if (getLocalStorage("plans") === null) {
      setLocalStorage("plans", JSON.stringify({ plans: array }));
    }
    if (getLocalStorage("roles") === null) {
      setLocalStorage("roles", JSON.stringify([]));
    }
    if (getLocalStorage("visited") === null) {
      console.log("Welcome for the first time!");
      setLocalStorage("visited", true);
    }
  }