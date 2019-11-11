const BASE_API_URL = "https://swapi.co/api";
// const ID_API_URL = "https://swapi.co/api";

export const get =  (url = {}) => {
    return fetch(BASE_API_URL + url)
        .then(response => response.json())
};

// export const getId =  (url = {}) => {
    // const url_url = url.replace('Stars_Wars/', '')
    // return fetch(ID_API_URL + url_url)
    //     .then(url => url.json())
// };
