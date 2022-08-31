/*
    Esse grupo de métodos são responsáveis por 
    realizar a integração com a Local Storage do Brownser.
*/
const saveInLocalstorage = (key, value) => {
    localStorage.setItem(key, value);
}

const getFromLocalstorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
}

const clearLocalStorage = () => {
    localStorage.clear();
}
