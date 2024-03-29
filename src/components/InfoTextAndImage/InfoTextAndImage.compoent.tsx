import { PrimaryText, PrimaryTitle } from "@/ui";
import React, { FC } from "react";

export const InfoTextAndImage: FC = () => {
  return (
    <div className=' pb-10 flex flex-col  items-center md:w-3/4 bg-primary rounded-md   '>
      <PrimaryTitle text='Responsible travel' />

      <div className=' p-5 bg-white rounded-md md:w-4/5 border'>
        <PrimaryText text="In the pursuit of continued exploration and adventure, adopting a mindful approach to travel becomes paramount. Embracing sustainable travel practices aligns with a green ethos, promoting conscious decisions. Opting for eco-friendly travel modes like trains or EVs minimizes the carbon footprint, allowing one to immerse in the journey's charm while lessening environmental impact. Thoughtful dining choices, supporting local, organic produce, nourish both body and ecosystem. Balancing wanderlust with sustainability entails mindful choices—limiting flights, perhaps one every couple of years, while embracing alternative modes of transport. This conscious travel philosophy intertwines exploration with environmental stewardship, preserving the planet's beauty for future voyages" />
      </div>
    </div>
  );
};
