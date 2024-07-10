// import { useState } from "react";

// const API_KEY ='ebbde961e4a343eca1f131943240907';
// const BASE_URL = 'http://api.weatherapi.com/v1/';

// //const [error, setError] = useState();

// const getWeatherData = (infoType, searchParams) => {
//     const url = new URL(BASE_URL + infoType);
//     url.search = new URLSearchParams({key: API_KEY, ...searchParams});
//     console.log(url);
//     return fetch(url).then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => data)
//       .catch((error) => {
//         setError(error);
//       });
//       if (error) {
//         return console.log("Error:", error.message);
//       }

//     // .then((res) => res.json())
//     // .then((data) => data);
// }

// export default getWeatherData



const API_KEY = 'ebbde961e4a343eca1f131943240907';
const BASE_URL = 'http://api.weatherapi.com/v1/';

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ key: API_KEY, ...searchParams });
  console.log("url", url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error.message);
    return null;
  }
}
export default getWeatherData