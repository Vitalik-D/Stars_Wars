import {get, getId} from './baseApi'

export const getAll = async ({pathName, page}) => {
    const urlParams = new URLSearchParams();

    urlParams.set('page', page);
    return get(`${pathName}?${urlParams.toString()}`)
};

export const getById = async ({pathName}) => {
    const urlParams = window.location.pathname;
    return getId(`${urlParams}/`)
};

// export const getAddData = async ({pathName}) => {
//     const urlParams = window.location.pathname;
//     // const urlId = urlParams.replace(`/${pathName}/`,'');
//     return getId(`${pathName}/`)
// };
