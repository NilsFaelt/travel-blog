import React, { FC } from "react";

interface Props {
  text: string;
}

export const PrimaryTitle: FC<Props> = ({ text }) => {
  return (
    <div className='text-center  text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black my-10 font-Bebas_Neuev border rounded-md p-5  '>
      {text}
    </div>
  );
};
