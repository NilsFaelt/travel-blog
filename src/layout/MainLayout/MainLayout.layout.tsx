import { Footer, Header } from "@/components";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className='w-full '>
      <Header />

      {children}
      <Footer />
    </div>
  );
};
