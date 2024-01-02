"use client";
import { FC } from "react";
import { DisplayTravelBlogsPreviewSmall } from ".";
import { useBlogs } from "@/hooks";
import { PrimaryTitle, Spinner } from "@/ui";

interface Props {
  limit?: number;
}

export const DisplayTravelsBlogsMap: FC<Props> = ({ limit = 1000 }) => {
  const { blogs, isLoading, isError } = useBlogs();
  if (isLoading) return <Spinner />;
  else if (!blogs && !isLoading)
    return <PrimaryTitle text='COULD NOT FIND ANY BLOGS' />;

  return (
    <div className='w-full flex flex-row flex-wrap gap-10 content-center justify-center '>
      {blogs?.map((blog, i) => {
        const { title, id, images } = blog.fields;
        return (
          <DisplayTravelBlogsPreviewSmall
            key={i}
            id={id}
            title={title}
            imageUrl={images[0].fields.file.url}
          />
        );
      })}
    </div>
  );
};
