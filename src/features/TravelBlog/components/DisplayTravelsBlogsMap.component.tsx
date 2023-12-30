import React, { FC } from "react";
import { DisplayTravelBlogsPreviewSmall } from ".";
interface Props {}
export const DisplayTravelsBlogsMap: FC = () => {
  return (
    <div className=' w-full flex-col flex-wrap'>
      <DisplayTravelBlogsPreviewSmall
        title='NILS'
        imageUrl='https://images.unsplash.com/photo-1682687221213-56e250b36fdd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
      />
    </div>
  );
};
