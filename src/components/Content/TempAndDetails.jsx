import React from 'react'
import { BiSolidDropletHalf } from 'react-icons/bi'
import { FaFirstOrder, FaFistRaised, FaThermometerEmpty, FaWind } from 'react-icons/fa'
import { GiSunrise, GiSunset } from 'react-icons/gi'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { useState, useEffect } from 'react'
import getWeatherData from '../../../services/weatherservice';

const TempAndDetails = ({ data }) => {
    const weatherConditionIcon = data?.current?.condition?.icon;
    const [horizontalDetails, setHorizontalDetails] = useState([
        {
            id: 1,
            Icon: GiSunrise,
            title: "Gündoğuşu",
            value: null
        },
        {
            id: 2,
            Icon: GiSunset,
            title: "Günbatımı",
            value: null
        },
        {
            id: 3,
            Icon: MdKeyboardArrowUp,
            title: "En Yüksek",
            value: null
        },
        {
            id: 4,
            Icon: MdKeyboardArrowDown,
            title: "En Düşük",
            value: null
        }
    ]);

    const [verticalDetails, setVerticalDetails] = useState([
        {
            id: 1,
            Icon: FaThermometerEmpty,
            title: "Hissedilen",
            value: null
        },
        {
            id: 2,
            Icon: BiSolidDropletHalf,
            title: "Nem Oranı",
            value: null
        },
        {
            id: 3,
            Icon: FaWind,
            title: "Rüzgar Hızı",
            value: null
        },
    ]);

    useEffect(() => {
        if (data) {
            const temps = {
                sunrise: data?.forecast?.forecastday[0].astro.sunrise,
                sunset: data?.forecast?.forecastday[0].astro.sunset,
                temp_max: data?.forecast.forecastday[0].day.maxtemp_c,
                temp_min: data?.forecast.forecastday[0].day.mintemp_c
            };
            const verticalDetails = {
                feelLike: data?.current?.feelslike_c + '°',
                humidity: '%' + data?.current?.humidity,
                windSpeed: data?.current?.wind_kph + ' km/h'
            };


            setHorizontalDetails([
                {
                    id: 1,
                    Icon: GiSunrise,
                    title: "Sunrise",
                    value: temps.sunrise
                },
                {
                    id: 2,
                    Icon: GiSunset,
                    title: "Sunset",
                    value: temps.sunset
                },
                {
                    id: 3,
                    Icon: MdKeyboardArrowUp,
                    title: "Max Temp",
                    value: temps.temp_max
                },
                {
                    id: 4,
                    Icon: MdKeyboardArrowDown,
                    title: "Min Temp",
                    value: temps.temp_min
                }
            ]);

            setVerticalDetails([
                {
                    id: 1,
                    Icon: FaThermometerEmpty,
                    title: "Feel Like: ",
                    value: verticalDetails.feelLike
                },
                {
                    id: 2,
                    Icon: BiSolidDropletHalf,
                    title: "Humidity: ",
                    value: verticalDetails.humidity
                },
                {
                    id: 3,
                    Icon: FaWind,
                    title: "Wind Speed: ",
                    value: verticalDetails.windSpeed
                }
            ]);
        }
    }, [data]);

    return (
        <div className='mx-auto max-w-screen-lg px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32'>
            <div className='flex flex-col items-center justify-center py-6 text-xl text-cyan-300'>
                <p>{data?.current?.condition?.text}</p>
            </div>
            {/* VERTICAL DETAILS */}
            <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between py-3'>
                <img src={weatherConditionIcon} alt="weather icon" className='w-24 h-24 mb-4 lg:mb-0 lg:ml-4' />
                <p className='text-4xl lg:text-8xl mb-4 lg:mb-0 lg:ml-4'>{data?.current.temp_c}°</p>
                <div className='flex flex-col space-y-2 items-center lg:items-start'>
                    {verticalDetails.map(({ id, Icon, title, value }) => (
                        <div key={id} className='flex items-center'>
                            <Icon className='flex mr-1' size={20}></Icon>
                            <p className='font-semibold mr-2'>{title}</p>
                            <span className='font-medium'>{value}</span>
                        </div>
                    ))}
                    <div className='flex items-center'>
                        <p className='font-semibold mr-2'>{data?.current?.location?.name}</p>
                        <span className='font-medium'>{data?.current?.location?.name}</span>
                    </div>
                </div>
            </div>
            {/* HORIZONTAL DETAILS */}
            <div className='flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-10 text-sm py-3 justify-center'>
                {horizontalDetails.map(({ id, Icon, title, value }) => (
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
