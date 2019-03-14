const BASE_API_URL = "https://swapi.co/api/";
const ID_API_URL = "https://swapi.co/api";

export const get =  (url = {}) => {
    return fetch(BASE_API_URL + url)
        .then(response => response.json())
}

export const getId =  (url = {}) => {
    return fetch(ID_API_URL + url)
        .then(url => url.json())
}