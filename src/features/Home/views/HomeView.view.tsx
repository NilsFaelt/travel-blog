import { ImageAndTextPreviewCard, PreviewBlog } from "@/components";
import { DisplayCityInfoView } from "@/features";
import { PrimaryText, PrimaryTitle } from "@/ui";
import { FC } from "react";

export const HomeView: FC = () => {
  return (
    <main className='flex-column  w-full min-h-full justify-center pb-80 '>
      <PrimaryTitle text='Explore The World' />
      <PrimaryText
        textSize='text-xl'
        text='Dont miss out on lifes beauty, as we live in a modern stressfull world take yor time to enjoy the world'
      />
      <PreviewBlog id='66cw7mgWvEu8yIKV4zM18q' />
      <DisplayCityInfoView />
    </main>
  );
};
