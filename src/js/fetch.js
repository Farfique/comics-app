const BASEURL = 'https://xkcd.com/';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const PROXY = true;

export function getRequestUrl(params){
    let urlToReturn;
    if (!params.id){
        urlToReturn = BASEURL + 'info.0.json';
    }
    else {
        urlToReturn = BASEURL + params.id + '/info.0.json';
    }
    return PROXY? PROXY_URL + urlToReturn : urlToReturn;
}

export async function fetchJson(url){       
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            console.log(error);
        });
}