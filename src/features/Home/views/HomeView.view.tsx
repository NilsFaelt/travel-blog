import { InfoTextAndImage, PreviewBlog } from "@/components";
import { DisplayCityInfoView, HorizontalPreviewView } from "@/features";
import { PrimaryText, PrimaryTitle } from "@/ui";
import { FC } from "react";

export const HomeView: FC = () => {
  return (
    <main className=' flex flex-col  w-full min-h-full justify-center pb-8 content-center items-center  '>
      <PrimaryTitle text='Explore The World' />
      <PrimaryText
        width='w-2/5'
        textSize='text-xl'
        text='Dont miss out on lifes beauty, as we live in a modern stressfull world take yor time to enjoy the world'
      />
      <PreviewBlog id='66cw7mgWvEu8yIKV4zM18q' />
      <DisplayCityInfoView />
      <HorizontalPreviewView />
      <InfoTextAndImage />
    </main>
  );
};
