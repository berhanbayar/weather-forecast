import { useState } from "react";
import {BiSearch, BiCurrentLocation} from "react-icons/bi";



const Inputs = ({setQuery}) => {
   
   const [inputValue, setInputValue] = useState('');

   const handleChange = (e) => {
    const { value } = e.target;
    const regex = /^[a-zA-Z]*$/; // Yalnızca İngilizce harfler için regex
    if (regex.test(value)) {
      setInputValue(value);
    }
   };

   function handleKeyDown (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleButtonClick(inputValue);
    }
  };

  function handleButtonClick(input) {
    setQuery({q: input});
  }

  return (
    <div className='flex flex-col items-center my-6 px-4 sm:px-6 md:px-8 lg:px-12'>
    <div className='flex flex-col sm:flex-row w-full sm:w-3/4 items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
        <input 
            type="text" 
            placeholder='Enter the city you are looking for...'
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className='text-gray-500 text-base sm:text-xl font-light p-2 w-full shadow-xl focus:outline-none'
        />
        <BiSearch 
            onClick={() => handleButtonClick(inputValue)} 
            size={24} 
            className="cursor-pointer transition ease-out hover:scale-110"
        />
    </div>
</div>

  )
}

export default Inputs