"use client";
import * as contentful from "contentful";
import { FC, useEffect, useState } from "react";
import { DisplayTravelBlogsPreviewSmall } from ".";
import { TravelBlog } from "@/types";

interface Props {
  limit?: number;
}
interface ContentfulEntry {
  items: { fields: Partial<TravelBlog>; sys: { id: string } }[];
}

export const DisplayTravelsBlogsMap: FC<Props> = ({ limit = 1000 }) => {
  const [blogs, setBlogs] = useState<{ fields: TravelBlog }[] | null>(null);
  const client = contentful.createClient({
    space: "0hnjt1ih3og0",
    accessToken: "9tOwQGLJAlBJ-eGOp9klrWLpNEkzEj8CgcyZHsegWDE",
  });

  useEffect(() => {
    async function fetchEntry() {
      try {
        const entries: ContentfulEntry = await client.getEntries({
          limit: limit,
        });
        if (entries) {
          setBlogs(entries.items as { fields: TravelBlog }[]);
        }
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    }

    fetchEntry();
  }, []);
  console.log(blogs, "state");
  if (!blogs) return null;

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
