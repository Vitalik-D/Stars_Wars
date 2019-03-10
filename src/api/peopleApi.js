import {get} from './baseApi'

export const getAll = async () => {
    return get('people')
        .then(data => data.results)
};

export const getById = async (personId) => {
    return get(`people/${personId}`)
};