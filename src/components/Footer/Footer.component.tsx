import Link from "next/link";
import React, { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className=' flex flex-row justify-around w-full h-20 box-border px-5 border-t-2 p-5 box-border items-center mt-10 '>
      <Link href={"/about"}>about</Link>
      <Link href={"/"}>HOME</Link>
      <Link href={"/travel-blog"}>blogs</Link>
    </footer>
  );
};
