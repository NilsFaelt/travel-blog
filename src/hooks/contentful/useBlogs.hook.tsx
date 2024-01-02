"use client";
import * as contentful from "contentful";
import { TravelBlog } from "@/types";
import { useEffect, useState } from "react";

interface ContentfulEntry {
  items: { fields: Partial<TravelBlog>; sys: { id: string } }[];
}
export const useBlogs = (limit = 1000) => {
  const client = contentful.createClient({
    space: "0hnjt1ih3og0",
    accessToken: "9tOwQGLJAlBJ-eGOp9klrWLpNEkzEj8CgcyZHsegWDE",
  });

  const [blogs, setBlogs] = useState<{ fields: TravelBlog }[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIserror] = useState(false);
  useEffect(() => {
    async function fetchEntry() {
      setIsLoading(true);
      try {
        const entries: ContentfulEntry = await client.getEntries({
          limit: limit,
        });
        if (entries) {
          setBlogs(entries.items as { fields: TravelBlog }[]);
        }
      } catch (error) {
        setIserror(true);
        console.error("Error fetching entry:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEntry();
  }, []);
  return { blogs, isLoading, isError };
};
