"use client";
import { FC, useState } from "react";
import { DisplayTravelBlogsPreviewSmall } from ".";
import { useBlogs } from "@/hooks";
import { PrimaryTitle, Spinner } from "@/ui";
import { Pagination } from "@/components";

interface Props {
  limit?: number;
  pagination?: boolean;
}

export const DisplayTravelsBlogsMap: FC<Props> = ({
  limit = 4,
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
      {pagination && (
        <Pagination
          setPage={setPage}
          page={page}
          pages={Math.round(total / limit)}
        />
      )}
    </>
  );
};
