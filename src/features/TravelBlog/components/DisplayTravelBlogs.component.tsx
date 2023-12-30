"use client";
import { MainSection, PrimaryTitle } from "@/ui";
import React, { FC, useEffect, useState } from "react";
import * as contentful from "contentful";
import { TravelBlog } from "@/types";
import { DisplayTravelsBlogsMap } from ".";

interface ContentfulEntry {
  items: Partial<TravelBlog>;
}

export const DisplayTravelBlogs: FC = () => {
  const [blogs, setBlogs] = useState<ContentfulEntry | null>(null);
  const client = contentful.createClient({
    space: "0hnjt1ih3og0",
    accessToken: "9tOwQGLJAlBJ-eGOp9klrWLpNEkzEj8CgcyZHsegWDE",
  });

  useEffect(() => {
    async function fetchEntry() {
      try {
        const entry = await client.getEntries();
        setBlogs(entry as ContentfulEntry);
      } catch (error) {
        console.error("Error fetching entry:", error);
      }
    }

    fetchEntry();
  }, []);
  console.log(blogs?.items);
  return (
    <div>
      <PrimaryTitle text='Travel Blogs' />
      <DisplayTravelsBlogsMap />
    </div>
  );
};
