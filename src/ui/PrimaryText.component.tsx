import React, { FC } from "react";

interface Props {
  text: string;
  width?: string;
  color?: "text-black" | "text-white";
  textSize?: "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl";
}

export const PrimaryText: FC<Props> = ({
  text,
  color = "text-black",
  textSize = "text-base",
  width = "w-5/%",
}) => {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className={`bg-white box-border w-4/5 md:${width}`}>
        <p className={`${color} ${textSize} text-center font-sans`}>{text}</p>
      </div>
    </div>
  );
};
