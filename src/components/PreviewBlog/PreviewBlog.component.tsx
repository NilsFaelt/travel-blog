"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import * as contentful from "contentful";
import { TravelBlog } from "@/types";

interface Props {
  id: string;
}

export const PreviewBlog: FC<Props> = ({ id }) => {
  interface ContentfulEntry {
    items: { fields: Partial<TravelBlog>; sys: { id: string } }[];
  }
  [];

  const [blogInfo, setBlogInfo] = useState<TravelBlog | null>(null);
  const [blogId, setBlogId] = useState<string | null>(null);
  const client = contentful.createClient({
    space: "0hnjt1ih3og0",
    accessToken: "9tOwQGLJAlBJ-eGOp9klrWLpNEkzEj8CgcyZHsegWDE",
  });

  useEffect(() => {
    async function fetchEntry() {
      try {
        const entry: ContentfulEntry = await client.getEntries();
        console.log(entry.items[0]);
        setBlogInfo(entry.items[0]?.fields as TravelBlog);
        setBlogId(entry.items[0].sys.id);
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    }

    if (id) {
      fetchEntry();
    }
  }, [id]);

  if (!id || !blogInfo) return null;

  const { title, images, underTitles, blogTextOne } = blogInfo;
  const imageUrl = images[0].fields.file.url;
  return (
    <Link href={`travel-blog/${blogId}`}>
      <div className='flex relative justify-center  rounded-md box-border p-10 my-0 w-full md:max-w-screen-md mx-auto bg-white overflow-hidden cursor-pointer'>
        <img
          className='rounded-md shadow-md md:h-[70vh] h-[500px] w-full object-cover'
          src={imageUrl}
          alt='Preview'
          width={600}
          height={500}
        />

        <h2 className=' absolute text-xl bottom-0  bg-black shadow-md bg-opacity-50 rounded-md  p-10 text-white  '>
          {title}
        </h2>
        <p className='min-w-52 text-center  absolute top-20 text-black  bg-primaryYellow p-5 rounded-md shadow-md'>
          {underTitles?.[0]}
        </p>
      </div>
    </Link>
  );
};
