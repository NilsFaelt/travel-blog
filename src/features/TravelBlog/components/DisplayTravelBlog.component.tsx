"use client";
import { Rating } from "@/components";
import { TravelBlog } from "@/types";
import { PrimaryText, PrimaryTitle } from "@/ui";
import { formatDate } from "@/utils";
import * as contentful from "contentful";
import { FC, useEffect, useState } from "react";

interface Props {
  id: string;
}

interface ContentfulEntry {
  fields: Partial<TravelBlog>;
  sys: any;
}

export const DisplayTravelBlog: FC<Props> = ({ id }) => {
  const [blogInfo, setBlogInfo] = useState<TravelBlog | null>(null);
  const [createdAt, setCreatedAt] = useState<string | null>(null);
  const client = contentful.createClient({
    space: "0hnjt1ih3og0",
    accessToken: "9tOwQGLJAlBJ-eGOp9klrWLpNEkzEj8CgcyZHsegWDE",
  });

  useEffect(() => {
    async function fetchEntry() {
      try {
        const entry: ContentfulEntry = await client.getEntry(id);

        setBlogInfo(entry?.fields as TravelBlog);
        setCreatedAt(entry?.sys?.createdAt);
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    }

    if (id) {
      fetchEntry();
    }
  }, [id]);
  const readableDate = formatDate(createdAt);
  if (!id || !blogInfo) return <PrimaryTitle text='Could Not Find Blog' />;

  const {
    title,
    images,
    underTitles,
    blogTextOne,
    blogTextTwo,
    blogTextThree,
    rating,
    ratingBeginnerLevel,
  } = blogInfo;
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
          <img
            width={100}
            height={1000}
            src={url}
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
