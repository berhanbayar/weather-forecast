import {DateTime} from "luxon";

const API_KEY ='ebbde961e4a343eca1f131943240907';
const BASE_URL = 'http://api.weatherapi.com/v1/';

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + infoType);
    url.search = new URLSearchParams({key: API_KEY, ...searchParams});

    return fetch(url).then((res) => res.json())
    .then((data) => data);
}



const formatToLocalTime = (
    secs,
    offset,
    format = "cccc, dd LLL yyyy' | Yerel zaman: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, {zone:"utc"}).toFormat(format);

const formatCurrent = (data) => {
    const { coord: {lat, lon}, 
            main: {temp, feelsLike, tempMin, tempMax, humidity},
            name, dt, 
            sys: {country, sunrise, sunset}, weather, 
            wind:{speed},
            timezone,} = data;

            const {main: details, icon} = weather[0];
            const formattedLocalTime = formatToLocalTime(dt, timezone);
    return {
        temp, feelsLike, tempMin, tempMax, humidity, name, country, sunrise: formatToLocalTime(sunrise, timezone, 'hh:mm a'),
        sunset: formatToLocalTime(sunset, timezone, 'hh:mm a'), speed, details, icon
    }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await 
    getWeatherData("current.json", searchParams).then(formatCurrent);

    return {...formattedCurrentWeather};

}

export default getFormattedWeatherData
