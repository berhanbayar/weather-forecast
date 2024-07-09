import React from 'react'

function Button({ id, name }) {
    return (
        <div className='flex items-center justify-around my-6'>
            <button id={id}  className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in'>{name}</button>
        </div>
    )
}

export default Button