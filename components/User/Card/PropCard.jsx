import React, { useState } from 'react';
import axios from 'axios';

const PropCard = ({ title1, title2, _id }) => {
  const [isChecked, setIsChecked] = useState(false);
  // console.log(_id)

  const handleCheckboxChange = async () => {
    // Toggle the isChecked state
    setIsChecked(!isChecked);

      // Your API endpoint URLs for list and unlist actions
      const listApiUrl = `http://localhost:3000/api/requests/showcase/${_id}`;
      const unlistApiUrl = `http://localhost:3000/api/requests/private/${_id}`;
    try {
      // Determine which API endpoint to use based on the checkbox state
      const apiUrl = isChecked ? unlistApiUrl : listApiUrl;

      // Make the Axios POST request
      const response = await axios.post(apiUrl, 
        {
          
        });

      // Handle the response data if needed
      console.log('Request successful:', response.data);
    } catch (error) {
      // Handle errors here
      console.error('Error during request:', error.message);
    }
  };

  return (
    <>
      <label className='autoSaverSwitch w-full  rounded-full shadow-card relative inline-flex cursor-pointer select-none bg-[#3A0242] p-2'>
        <input
          type='checkbox'
          name='autoSaverSwitch'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`dot w-full sm:w-[10rem] md:w-[15rem] duration-200 flex text-[14px] text-white items-center space-x-2 sm:space-x-6 rounded-full py-2 px-4 sm:px-8 text-sm font-medium ${
            isChecked ? 'text-primary bg-[#C732FF]' : 'text-body-color'
          }`}
        >
          {title1}
        </span>
        <span
          className={`slider w-full sm:w-[10rem] md:w-[15rem] flex text-[14px] text-white space-x-2 sm:space-x-6 rounded-full py-2 px-4 sm:px-8 text-sm font-medium ${
            !isChecked ? 'text-primary bg-[#C732FF]' : 'text-body-color'
          } duration-200`}
        >
          {title2}
        </span>
      </label>
    </>
  );
};

export default PropCard;
