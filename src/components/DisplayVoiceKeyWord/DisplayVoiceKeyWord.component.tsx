import React, { FC } from "react";

interface Props {
  text: string;
}
export const DisplayVoiceKeyWord: FC<Props> = ({ text }) => {
  return (
    <p className='hidden sm:block  text-black  bg-pink-200  rounded-md text-center absolute bottom-2 right-2 p-2 pl-4 pr-4 border border-primary'>
      {text}
    </p>
  );
};
