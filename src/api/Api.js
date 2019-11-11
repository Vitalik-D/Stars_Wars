import {get} from './baseApi'

export const getAll = async ({pathName, page}) => {
    return get(`${pathName}?page=${page}`)
};

export const getById = async ({pathName}) => {
    const urlParams = window.location.pathname;
    return get(`${urlParams}/`)
};

// export const getAddData = async ({pathName}) => {
//     const urlParams = window.location.pathname;
//     // const urlId = urlParams.replace(`/${pathName}/`,'');
//     return getId(`${pathName}/`)
// };
