import {get} from './baseApi'

export const getAll = async ({page}) => {
    const urlParams = new URLSearchParams();
    urlParams.set('page', page);
    return get(`people?${urlParams.toString()}`)
};

export const getById = async (personId) => {
    return get(`people/${personId}`)
};