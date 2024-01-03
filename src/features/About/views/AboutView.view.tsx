import { MainSection, PrimaryText, PrimaryTitle } from "@/ui";
import React, { FC } from "react";

export const AboutView: FC = () => {
  return (
    <div className='flex w-full justify-center mt-10 '>
      <MainSection>
        <PrimaryTitle text='ABOUT GOGO' />
        <PrimaryText text='This travel platform is a unique curation of my personal expeditions, narrated through the lens of artificial intelligence, relaying my experiences in a distinct voice. Developed on Next.js and Tailwind CSS, the site embodies seamless interactivity and captivating visuals sourced from Unsplash. Powered by Contentful CMS, it dynamically showcases my globetrotting adventures. Each journey is eloquently described, offering visitors an immersive glimpse into diverse cultures and landscapes. This platform encapsulates the fusion of cutting-edge technology with personal storytelling, inviting users to explore and engage with my global escapades in a visually compelling and intellectually stimulating manner.' />
        <PrimaryText text='Safe travles / GOGO' />
      </MainSection>
    </div>
  );
};
