import { FC } from "react";
import { DisplayTravelBlog } from "../components";

interface Props {
  id: string;
}
export const TravelBlogView: FC<Props> = ({ id }) => {
  return (
    <main className='flex-column  w-full min-h-full justify-center pb-80  '>
      <DisplayTravelBlog id={id} />
    </main>
  );
};
