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
      <div>
        <h3 className=''>{title}</h3>
        <img
          className=' rounded-md w-80  md:w-72 h-44  '
          src={imageUrl}
          alt={title}
        />
      </div>
    </Link>
  );
};
