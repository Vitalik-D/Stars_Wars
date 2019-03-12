import {get} from './baseApi'

export const getAll = async ({pathName, page}) => {
    const urlParams = new URLSearchParams();

    urlParams.set('page', page);
    return get(`${pathName}?${urlParams.toString()}`)
};

export const getById = async (personId) => {
    return get(`people/${personId}`)
};

