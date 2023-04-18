export const getUrlApi = (url) => {
    let urlApi = url.split('');
    urlApi.splice(8, 0, 'api.');
    urlApi.splice(20, 0, 'repos/');
    return urlApi.join('');
};