import React, { FC } from "react";

export const DisplayInfoPopUp: FC = () => {
  return (
    <div className=' flex flex-col gap-2 p-4 pl-10 pr-10 rounded-md shadow-lg absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border  text-black bg-gray-200 '>
      <h5 className='text-xl'>Speak to navigate page </h5>
      <p>Spooken comands</p>
      <p>
        <span className='text-primary'>Menu:</span> Opens menu
      </p>
      <p>
        <span className='text-primary'>Close:</span> closes menu
      </p>
      <p>
        <span className='text-primary'>Home:</span> Goes to homepage menu
      </p>
      <p>
        <span className='text-primary'>Blog:</span> Goes to Blogspage menu
      </p>
      <p>
        <span className='text-primary'>About:</span> Goes to Aboutpage menu
      </p>
      <p>
        <span className='text-primary'>Contact:</span> Scrolls to contact
      </p>
    </div>
  );
};
