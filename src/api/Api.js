import {get, getId} from './baseApi'

export const getAll = async ({pathName, page}) => {
    const urlParams = new URLSearchParams();

    urlParams.set('page', page);
    return get(`${pathName}?${urlParams.toString()}`)
};

export const getById = async () => {
    const urlParams = window.location.pathname;
    return getId(`${urlParams}`)
};

