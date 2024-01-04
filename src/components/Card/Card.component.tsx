import { PrimaryText, PrimaryTitle } from "@/ui";
import Image from "next/image";
import React from "react";

export const Card = () => {
  return (
    <div className='flex  justify-center'>
      <div className=' p-5  flex flex-col lg:flex-row    w-full md:w-3/4 border rounded-md   '>
        <div className=' p-5  flex flex-col justify-start content-start align-top w-full'>
          <h2 className="'text-center  text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black p-0 font-Bebas_Neuev  rounded-md p  '">
            My Name Is Nils
          </h2>
          <p>Ive Been Traveling and learning new cultures all my life.</p>
          <div className='border w-3/4 rounded-md p-5 mt-5 -ml-5 bg-secondary '>
            <p>Get In Touch!</p>
            <p>Mail: Nils.faelt@gmail.com</p>
          </div>
        </div>
        {/* <img
          src='https://images.unsplash.com/photo-1534954553104-88cb75be7648?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt=''
          className=' h-72 w-full object-cover'
          height={10}
          width={10}
        /> */}
        <Image
          alt='image of me'
          src={"/images/van.png"}
          height={100}
          width={200}
          className=' h-72 w-full object-cover rounded-lg'
        />
      </div>
    </div>
  );
};
