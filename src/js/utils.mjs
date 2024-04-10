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

export function successfulRes(data) {
    console.log("Successfully Saved to Server!", data);
    window.location.href = "/index.html";
}

export function getCalendarLink(name = "", description, duration = 1, startHour = 9, startMinutes = 0) {
    // defaults
    const date = new Date();
    const year = date.getYear();
    const month = date.getMonth();
    const day = date.getDay();

    // let durationDict = convertDuration(duration);
    let endMinutes = 0;
    let endHour = 4;

    let calendarUrl = `http://www.google.com/calendar/event?action=TEMPLATE
    &text=${name}
    &dates=${year}${month}${day}
    T${startHour}${startMinutes * 60}
    /
    ${year}${month}${day}
    T${endHour}${endMinutes
    }details=${description}`; // location=123%20Main%20St%2C%20Example%2C%20NY
    return calendarUrl;
}