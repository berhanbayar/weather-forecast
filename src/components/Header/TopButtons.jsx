import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id: 1,
            name: "İstanbul",
        },
        {
            id: 2,
            name: "Ankara",
        },
        {
            id: 3,
            name: "İzmir",
        },
        {
            id: 4,
            name: "Antalya",
        },
        {
            id: 5,
            name: "Karabük",
        },
    ]
    return (
        <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                // <Buttons key={city.id} id={city.id} name={city.name}></Buttons>
                <button key={city.id} id={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'>{city.name}</button>
            ))}
        </div>
    )
}

export default TopButtons
