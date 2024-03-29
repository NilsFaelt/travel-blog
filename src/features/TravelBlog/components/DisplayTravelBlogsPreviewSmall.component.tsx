import { DisplayVoiceKeyWord } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
interface Props {
  imageUrl: string;
  id: string;
  title: string;
  voiceNavKeyword: string;
}

export const DisplayTravelBlogsPreviewSmall: FC<Props> = ({
  imageUrl,
  id,
  title,
  voiceNavKeyword,
}) => {
  return (
    <Link href={`/travel-blog/${id}`}>
      <div className='bg-white shadow-md p-3 rounded-md relative'>
        <h3 className=' shadow-md  bg-white border border-secondary w-3/4 rounded-md text-center absolute -top-5 left-5 p-3'>
          {title}
        </h3>
        <Image
          className=' rounded-md w-80  md:w-72 h-44 min-w-72  '
          src={"https:" + imageUrl}
          alt={title}
          width={200}
          height={100}
        />
        <DisplayVoiceKeyWord text={voiceNavKeyword} />
      </div>
    </Link>
  );
};
