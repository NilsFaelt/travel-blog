import React, { FC } from "react";
interface Props {
  imageUrl: string;
  title: string;
}

export const DisplayTravelBlogsPreviewSmall: FC<Props> = ({
  imageUrl,
  title,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img className=' rounded-md h-10' src={imageUrl} alt={title} />
    </div>
  );
};
