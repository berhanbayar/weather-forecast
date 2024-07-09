const API_KEY ='ebbde961e4a343eca1f131943240907';
const BASE_URL = 'http://api.weatherapi.com/v1/';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({key: API_KEY, ...searchParams});

    return fetch(url).then((res) => res.json())
    .then((data) => data);
}

export default getWeatherData