import React from 'react'
import { FaReact } from "react-icons/fa";
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TempAndDetails from './components/TempAndDetails';
import { useState } from 'react';
import Forecast from './components/Forecast';
import getWeatherData from '../services/weatherservice';


const App = () => {
  const getWeather = async () => {
    const data = await getWeatherData('current.json', {q: "Istanbul"}, {aqi: "no"});
    console.log(data);
  }

  getWeather();

  return (
    <div className='mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl
     shadow-gray-400 from-cyan-600 to-blue-700'>
      <TopButtons />
      <Inputs/>

      <TimeAndLocation/>
      <TempAndDetails/>
      <Forecast/>
      {/* <h1 className='text-7xl font-bold'>deneme</h1>
      <FaReact size={50} className='text-red-400'></FaReact> */}
    </div>
  )
}

export default App