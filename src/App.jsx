import React from 'react'
import { useState, useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import getWeatherData from '../services/weatherservice';
import MainContent from './components/Content/MainContent';
import MainHeader from './components/Header/MainHeader';


const App = () => {
  const [query, setQuery] = useState({q: "Istanbul"});
  const [units, setUnits] = useState("metric");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    const weatherData = await getWeatherData('forecast.json', {q: query.q, days: "1", aqi: "no", alerts: "no" });
    if (weatherData) {
      setData(weatherData);
    } else {
      setError("Failed to fetch weather data");
    }
  }

  useEffect(() => {
      getWeather();
      console.log("data", data);
  }, [query, units]);

  return (

    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700'>
      <MainHeader data={data} setQuery={setQuery} />
      <MainContent data={data} />
    </div>

  )
}

export default App