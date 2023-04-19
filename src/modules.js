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

export const getUrlIssuesApi = (api) => {
    const urlIssuesApi = api.replace('{/number}', '');
    return urlIssuesApi;
  };

  export const onSubmit = (event, callBack) => {
    event.preventDefault();
    callBack(true);
  }

