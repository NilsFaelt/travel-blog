import { PrimaryTitle } from "@/ui";
import { FC } from "react";
import { DisplayTravelsBlogsMap } from ".";

export const DisplayTravelBlogs: FC = () => {
  return (
    <div>
      <PrimaryTitle text='Travel Blogs' />
      <DisplayTravelsBlogsMap />
    </div>
  );
};
