import { useState } from "react";
import {BiSearch, BiCurrentLocation} from "react-icons/bi";

const Inputs = ({setQuery}) => {
   
   const [inputValue, setInputValue] = useState('');

   
   const handleChange = (event) => {
     setInputValue(event.target.value);
   };

  function handleButtonClick(params) {
    setQuery({q: params});
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            type="text" 
            placeholder='aradığınız şehiri girin...'
            value={inputValue}
            onChange={handleChange} 
            className='text-gray-500 text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'/>

            <BiSearch onClick={() => handleButtonClick(inputValue)} size={30} className="cursor-pointer transition ease-out hover:scale-125"></BiSearch> 
            <BiCurrentLocation size={30} className="cursor-pointer transition ease-out hover:scale-125"></BiCurrentLocation>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
            <button className="text-2xl font-medium transition ease-out hover:scale-125">°C</button>
            <p className="text-2xl font-medium mx-1">|</p>
            <button className="text-2xl font-medium transition ease-out hover:scale-125">°F</button>
        </div>
    </div>
  )
}

export default Inputs