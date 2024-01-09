import React, { FC } from "react";

export const DisplayInfoPopUp: FC = () => {
  return (
    <div className='flex items-center flex-col gap-2 p-4  rounded-md shadow-lg absolute top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border  text-black bg-gray-200 '>
      <h5 className='text-xl'>Speak to navigate page </h5>
      <div className=' flex flex-row flex-nowrap gap-5 '>
        <div className=' rounded-md bg-secondary p-5   '>
          <p className='whitespace-nowrap'> Spooken Comands:</p>
          <p className=' underline '>Menu</p>
          <p className=' underline'>Close</p>
          <p className=' underline'>Home</p>
          <p className=' underline'>Blog</p>
          <p className=' underline'>About</p>
          <p className=' underline'>Contact</p>
        </div>
        <div className=' rounded-md bg-primary p-5'>
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
