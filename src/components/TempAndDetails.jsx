import React from 'react'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaThermometerEmpty } from 'react-icons/fa'

const TempAndDetails = () => {
    const verticalDetails =[
        {
            id:1,
            Icon: FaThermometerEmpty,
            title: "Hissedilen",
            value: "34°"
        },
        {
            id:2,
            Icon: BiSolidDropletHalf,
            title: "Nem Oranı",
            value: "346%"
        },
        {
            id:3,
            Icon: FiWind,
            title: "Rüzgar",
            value: "12 km/s"
        },
    ]

  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Yağmurlu</p>
        </div>
        <div className='flex flex-row items-end justify-between py-3'>
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-20'/>
            <p className='text-5xl'> 34°</p>

            <div className='flex flex-col space-y-3 items-start'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <FaThermometerEmpty size={18} className='mr-1'/>
                    Real Feel: <span className='font-medium ml-1'>35°</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TempAndDetails