"use client";
import { FC, useState } from "react";
import { useBlogs } from "@/hooks";
import { PrimaryTitle, Spinner } from "@/ui";
import { DisplayTravelBlogsPreviewSmall } from "@/features/TravelBlog/components";

interface Props {
  limit?: number;
  pagination?: boolean;
}

export const HorizontalPreview: FC<Props> = ({
  limit = 10,
  pagination = true,
}) => {
  const [page, setPage] = useState(0);
  const skip = page * limit;
  const { blogs, isLoading, isError, total } = useBlogs(limit, skip);
  if (isLoading) return <Spinner />;
  else if (!blogs && !isLoading)
    return <PrimaryTitle text='COULD NOT FIND ANY BLOGS' />;

  return (
    <>
      <div
        className={` p-10 w-full md:w-3/4 m-10 overflow-auto m-10 flex flex-row  shadow-md rounded-md items-center  gap-10    `}
      >
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
    </>
  );
};
