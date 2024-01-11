import { FC } from "react";
import { DisplayCityInfo } from "..";
import { MainSection, PrimaryTitle } from "@/ui";

export const DisplayCityInfoView: FC = () => {
  return (
    <div className=' bg-white w-full md:w-3/4  p-10 shadow-md rounded-md  flex flex-col  relative justify-center content-center my-10'>
      <PrimaryTitle text='Get county info' />

      <DisplayCityInfo />
    </div>
  );
};
