import Link from "next/link";
import React, { FC } from "react";
interface Props {
  imageUrl: string;
  id: string;
  title: string;
}

export const DisplayTravelBlogsPreviewSmall: FC<Props> = ({
  imageUrl,
  id,
  title,
}) => {
  return (
    <Link href={`/travel-blog/${id}`}>
      <div className=' shadow-md p-1 rounded-md relative'>
        <h3 className='  bg-secondary w-3/4 rounded-md text-center absolute -top-5 left-5 p-3'>
          {title}
        </h3>
        <img
          className=' rounded-md w-80  md:w-72 h-44 min-w-72  '
          src={imageUrl}
          alt={title}
        />
      </div>
    </Link>
  );
};
