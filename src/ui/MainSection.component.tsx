import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const MainSection: FC<Props> = ({ children }) => {
  return (
    <section className=' w-full min-h-full px-4 md:w-2/3 lg:px-0 flex justify-center items-center pb-80'>
      {children}
    </section>
  );
};
