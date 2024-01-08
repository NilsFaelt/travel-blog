"use client";
import { Rating } from "@/components";
import { useBlog } from "@/hooks";
import { TravelBlog } from "@/types";
import { PrimaryText, PrimaryTitle, Spinner } from "@/ui";
import { formatDate } from "@/utils";
import Image from "next/image";

import { FC } from "react";

interface Props {
  id: string;
}

export const DisplayTravelBlog: FC<Props> = ({ id }) => {
  const { blog, isError, isLoading, createdAt } = useBlog(id);
  const readableDate = formatDate(createdAt);
  if (isLoading) return <Spinner />;
  if (!id || !blog) return <PrimaryTitle text='Could Not Find Blog' />;

  const {
    title,
    images,
    underTitles,
    blogTextOne,
    blogTextTwo,
    blogTextThree,
    rating,
    ratingBeginnerLevel,
  } = blog;
  const blogData = [
    {
      url: images[0]?.fields?.file?.url,
      title: underTitles[0],
      text: blogTextOne,
    },
    {
      url: images[1]?.fields?.file?.url ? images[1]?.fields?.file?.url : "",
      title: underTitles[1] ? underTitles[1] : "",
      text: blogTextTwo ? blogTextTwo : "",
    },
    {
      url: images[2]?.fields?.file?.url ? images[2]?.fields?.file?.url : "",
      title: underTitles[2] ? underTitles[2] : "",
      text: blogTextThree ? blogTextThree : "",
    },
  ];

  return (
    <div className=' pb-10'>
      <PrimaryTitle text={title} />
      <Rating rating={rating} difficultyRating={ratingBeginnerLevel} />
      {blogData.map((blog, i) => {
        return (
          <BlogSection
            key={i}
            url={blog.url}
            title={blog.title}
            text={blog.text}
          />
        );
      })}
      <PrimaryText text={`CREATED: ${readableDate}`} />
    </div>
  );
};

interface BlogSectionProps {
  url: string;
  title: string;
  text: string;
}

export const BlogSection: FC<BlogSectionProps> = ({ url, title, text }) => {
  return (
    <div className='max-w-3xl mx-auto '>
      <div className='my-8 flex flex-col items-center  justify-center text-center'>
        {url && (
          <Image
            width={500}
            height={1000}
            src={"https:" + url}
            alt={`Image 1`}
            className='h-auto w-2/3 object-cover rounded-lg m-5'
          />
        )}
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <PrimaryText text={text} />
      </div>
    </div>
  );
};
