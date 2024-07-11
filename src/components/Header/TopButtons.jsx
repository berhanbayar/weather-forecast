import React from 'react'

const TopButtons = ({ setQuery }) => {

    const cities = [
        {
            id: 1,
            name: "Istanbul",
        },
        {
            id: 2,
            name: "Ankara",
        },
        {
            id: 3,
            name: "Izmir",
        },
        {
            id: 4,
            name: "Antalya",
        },
        {
            id: 5,
            name: "Karabuk",
        },
        {
            id: 6,
            name: "Yalova",
        }
    ]

    function handleButtonClick(cityId){
        
        switch (cityId) {
            case 1:
                setQuery({ q: "Istanbul" })
                break;
            case 2:
                console.log("girdi 2");
                setQuery({ q: "Ankara" })
                break;
            case 3:
                console.log("girdi 3");
                setQuery({ q: "Izmir" })
                break;
            case 4:
                console.log("girdi 4");
                setQuery({ q: "Antalya" })
                break;
            case 5:
                console.log("girdi 5");
                setQuery({ q: "Karabuk" })
                break;
            case 6:
                console.log("girdi 5");
                setQuery({ q: "Yalova" })
                break;
            default:
                break;
        }
    }
    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button onClick={() => handleButtonClick(city.id)}
                key={city.id} id={city.id} 
                className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md 
                transition ease-in'>{city.name}</button>
            ))}
        </div>
    )
}

export default TopButtons
