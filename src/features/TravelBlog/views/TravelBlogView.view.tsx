import { FC } from "react";
import { DisplayTravelBlog, DisplayTravelsBlogsMap } from "../components";

interface Props {
  id: string;
}
export const TravelBlogView: FC<Props> = ({ id }) => {
  return (
    <main className='flex-column  w-full min-h-full justify-center pb-20  '>
      <DisplayTravelBlog id={id} />
      <DisplayTravelsBlogsMap limit={6} pagination={false} />
    </main>
  );
};
