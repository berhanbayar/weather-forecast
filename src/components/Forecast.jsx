import React from 'react'
import { useState } from 'react'


const Forecast = () => {
  
const [StepForecast, setStepForecast] = useState([
    {
        id: 1,
        time: "08.00",
        Icon: <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-20'/>,
        value: "14°"
    },
    {
        id: 2,
        time: "12.00",
        Icon: <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-20'/>,
        value: "19°"
    },
    {
        id: 3,
        time: "17.00",
        Icon: <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-20'/>,
        value: "16°"
    },
    {
        id: 4,
        time: "20.00",
        Icon: <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-20'/>,
        value: "13°"
    },
    {
        id: 5,
        time: "00.00",
        Icon: <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-20'/>,
        value: "1°"
    }
])
  return (
    <div>
        <div className=''>
            <p className='font-semibold mt-10'>3 HOUR STEP FORECAST</p>
            <hr />
            <div className='flex flex-row items-start justify-between'>
                {StepForecast.map(({id, time, Icon, value}) =>(
                    <div key={id}>
                        <div className='flex flex-col items-center justify-center mt-3'>{time}</div>
                        {Icon}
                        <div className='flex flex-col items-center justify-center'>{value}</div>
                    </div>
                ))}
            </div>
            <p className='font-semibold mt-10'>3 HOUR STEP FORECAST</p>
            <hr />
            <div className='flex flex-row items-start justify-between'>
                {StepForecast.map(({id, time, Icon, value}) =>(
                    <div key={id}>
                        <div className='flex flex-col items-center justify-center mt-3'>{time}</div>
                        {Icon}
                        <div className='flex flex-col items-center justify-center'>{value}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Forecast