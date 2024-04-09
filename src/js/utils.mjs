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
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }

