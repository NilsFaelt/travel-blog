import React, { FC } from "react";

export const DisplayInfoPopUp: FC = () => {
  return (
    <div className='flex items-center flex-col gap-2 p-4  rounded-md shadow-lg absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border  text-black bg-gray-200 '>
      <h5 className='text-xl'>Speak to navigate page </h5>
      <div className=' flex flex-row flex-nowrap gap-5 '>
        <div className='flex flex-col rounded-md  p-5 gap-1    '>
          <p className='whitespace-nowrap'> Spooken Comands:</p>
          <p className='hidden sm:block  text-black  bg-pink-200  rounded-md text-center  bottom-2 right-2 p-0 pl-4 pr-4 border border-primary'>
            Menu
          </p>
          <p className='hidden sm:block  text-black  bg-pink-200  rounded-md text-center  bottom-2 right-2 p-0 pl-4 pr-4 border border-primary'>
            Close
          </p>
          <p className='hidden sm:block  text-black  bg-pink-200  rounded-md text-center  bottom-2 right-2 p-0 pl-4 pr-4 border border-primary'>
            Home
          </p>
          <p className='hidden sm:block  text-black  bg-pink-200  rounded-md text-center  bottom-2 right-2 p-0 pl-4 pr-4 border border-primary'>
            Blog
          </p>
          <p className='hidden sm:block  text-black  bg-pink-200  rounded-md text-center  bottom-2 right-2 p-0 pl-4 pr-4 border border-primary'>
            About
          </p>
          <p className='hidden sm:block  text-black  bg-pink-200  rounded-md text-center  bottom-2 right-2 p-0 pl-4 pr-4 border border-primary'>
            Contact
          </p>
        </div>
        <div className='flex flex-col gap-1.5 rounded-md  p-5'>
          <p>Navigates/Executes</p>
          <p>Opens menu</p>
          <p>closes menu</p>
          <p>Goes to homepage </p>
          <p>Goes to Blogspage </p>
          <p>Goes to Aboutpage </p>
          <p>Scrolls to contact </p>
        </div>
      </div>
    </div>
  );
};
