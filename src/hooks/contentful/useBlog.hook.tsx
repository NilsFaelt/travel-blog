"use client";
import * as contentful from "contentful";
import { TravelBlog } from "@/types";
import { useEffect, useState } from "react";
interface ContentfulEntry {
  fields: Partial<TravelBlog>;
  sys: any;
}
export const useBlog = (id: string) => {
  const client = contentful.createClient({
    space: "0hnjt1ih3og0",
    accessToken: "9tOwQGLJAlBJ-eGOp9klrWLpNEkzEj8CgcyZHsegWDE",
  });

  const [blog, setBlog] = useState<TravelBlog | null>(null);
  const [createdAt, setCreatedAt] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIserror] = useState(false);
  useEffect(() => {
    async function fetchEntry() {
      setIsLoading(true);
      try {
        const entry: ContentfulEntry = await client.getEntry(id);

        setBlog(entry?.fields as TravelBlog);
        setCreatedAt(entry?.sys?.createdAt);
      } catch (error) {
        setIserror(true);
        console.error("Error fetching entry:", error);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchEntry();
    }
  }, [id]);
  return { blog, isLoading, isError, createdAt };
};
