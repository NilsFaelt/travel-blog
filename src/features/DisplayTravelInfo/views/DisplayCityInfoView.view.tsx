import { FC } from "react";
import { DisplayCityInfo } from "..";
import { PrimaryTitle } from "@/ui";

export const DisplayCityInfoView: FC = () => {
  return (
    <div className='flex flex-col  relative justify-center content-center my-10'>
      <p className=' text-center mb-2 font-bold'>Get Country Info:</p>
      <DisplayCityInfo />
    </div>
  );
};
