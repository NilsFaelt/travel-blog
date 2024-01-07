import { Footer, Header } from "@/components";
import { Card } from "@/components/Card/Card.component";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className='w-full mt-20 '>
      <Header />
      {children}
      <Card />
      <Footer />
    </div>
  );
};
