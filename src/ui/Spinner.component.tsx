import React from "react";

export const Spinner = () => {
  return (
    <div className='flex justify-center my-5 h-screen'>
      <div
        className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primaryYellow border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]'
        role='status'
      ></div>
    </div>
  );
};
