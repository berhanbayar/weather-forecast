import React from 'react'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaFirstOrder, FaFistRaised, FaThermometerEmpty, FaWind } from 'react-icons/fa'
import { GiSunrise, GiSunset} from 'react-icons/gi' 
import { MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md' 
import { useState, useEffect } from 'react'
import getWeatherData from '../../../services/weatherservice';

const TempAndDetails = ({ data }) => {

    const [horizontalDetails, setHorizontalDetails] = useState([
        {
            id:1,
            Icon:GiSunrise,
            title:"Gündoğuşu"
        },
        {
            id:2,
            Icon:GiSunset,
            title:"Günbatımı"
        },
        {
            id:3,
            Icon: MdKeyboardArrowUp,
            title:"En Yüksek"
        },
        {
            id:4,
            Icon:MdKeyboardArrowDown,
            title:"En Düşük"
        }
    ]);

    console.log("detail-->", data)
    return (
        <div>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
                <p>Yağmurlu</p>
            </div>
            {/* VERTICAL DETAILS */}
            <div className='flex flex-row items-end justify-between py-3'>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather icon" className='w-50 ml-4'/>
                <p className='text-8xl ml-20'> 34°</p>

                <div className='flex flex-col space-y-2  items-start'>
                    {/* {verticalDetails.map(({id, Icon, title, value}) => (
                        <div key={id} className='flex items-center'>
                            <Icon className='flex mr-1'size={20}></Icon>
                            <p className='font-semibold mr-2'>{title}</p>
                            <span className='font-medium'>{value}</span>
                        </div>
                    ))} */}
                          <div className='flex items-center'>
                            <p className='font-semibold mr-2'>{data?.location?.name}</p>
                            <span className='font-medium'>{data?.current?.cloud}</span>
                        </div>
                </div>
            </div>
            {/* HORIZONTAL DETAILS */}
            <div className='flex flex-row items-center space-x-10 text-sm py-3 justify-center'>
                {horizontalDetails.map(({id, Icon, title, value}) => (
                    <div key={id} className='flex flex-row items-center'>
                        <Icon className='flex mr-1' size={30}></Icon>
                        <p className='font-semibold mr-2'>{title}</p>
                        <span className='font-medium'>{value}</span>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default TempAndDetails;
