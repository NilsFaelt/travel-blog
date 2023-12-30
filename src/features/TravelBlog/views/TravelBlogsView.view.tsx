import { FC } from "react";
import { DisplayTravelBlogs } from "../components";
import { MainSection } from "@/ui";

interface Props {
  id: string;
}
export const TravelBlogsView: FC = () => {
  return (
    <div className=' w-full flex content-center justify-center'>
      <MainSection>
        <DisplayTravelBlogs />
      </MainSection>
    </div>
  );
};
