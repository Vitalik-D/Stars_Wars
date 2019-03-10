import {get} from './baseApi'

export const getAll = async () => {
    return get('people')
};

export const getById = async (personId) => {
    return get(`people/${personId}`)
};