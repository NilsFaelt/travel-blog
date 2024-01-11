import Link from "next/link";
import React, { FC } from "react";

export const Logo: FC = () => {
  return (
    <div
      data-testid='logo-comp'
      className='rounded-md border border-primary  bg-white p-1 pl-2 pr-2  shadow-md'
    >
      <Link href={"/"}>
        <h1 className='text-xl text-primary'>
          G<span className='text-secondary'>O</span>G
          <span className='text-secondary'>O</span>-TRAVEL
        </h1>
      </Link>
    </div>
  );
};
