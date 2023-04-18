export const getDataFromApi = async (url, callBack) => {
    const response = await fetch(url);
    const data = await response.json();
    callBack(data);
  };

export const getUrlApi = (url) => {
    let urlApi = url.split('');
    urlApi.splice(8, 0, 'api.');
    urlApi.splice(20, 0, 'repos/');
    return urlApi.join('');
};

