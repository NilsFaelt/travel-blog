import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  imageUrl: string;
  secondTitle?: string;
  link: string;
  thirdTitle?: string;
}

export const ImageAndTextPreviewCard: FC<Props> = ({
  title,
  imageUrl,
  secondTitle,
  link,
  thirdTitle,
}) => {
  return (
    <Link href={link}>
      <div className='flex relative justify-center  rounded-md box-border p-10 my-0 w-full md:max-w-screen-md mx-auto bg-white overflow-hidden cursor-pointer'>
        <Image
          className='rounded-md shadow-md md:h-[70vh] h-[500px] w-full object-cover'
          src={imageUrl}
          alt='Preview'
          width={1000}
          height={500}
        />

        <h2 className=' absolute text-xl bottom-0  bg-black shadow-md bg-opacity-50 rounded-md  p-10 text-white  '>
          {title}
        </h2>
        <p className=' absolute top-20 text-black  bg-primaryYellow p-5 rounded-md shadow-md'>
          {secondTitle}
        </p>
        <p className=' absolute top-40 text-black p-5 '>{thirdTitle}</p>
      </div>
    </Link>
  );
};
