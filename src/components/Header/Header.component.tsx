"use client";
import { useCloseOnClickOutsideElement } from "@/hooks";
import Link from "next/link";
import React, { useRef, useState } from "react";

export const Header = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useCloseOnClickOutsideElement(ref, setIsOpen);

  return (
    <header className='flex justify-between items-center w-full h-20 box-border px-5 border-b-2'>
      <div className='rounded-md bg-black p-2'>
        <Link href={"/"}>
          <h1 className='text-xl text-white'>
            G<span className='text-primaryYellow'>O</span>G
            <span className='text-primaryYellow'>O</span>-TRAVEL
          </h1>
        </Link>
      </div>

      <div className=' '>
        <button
          ref={ref}
          onClick={toggleMenu}
          className={`${
            !isOpen ? "text-black" : "text-black"
          } focus:outline-none focus:ring-0  `}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
      </div>
      <aside
        ref={ref}
        className={`shadow-lg border-l-2 border-primaryYellow shadow-lg-left z-10 fixed top-0 right-0 h-full w-full sm:w-80 bg-white text-white transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full "
        } `}
      >
        <div className=' '>
          <button
            ref={ref}
            onClick={toggleMenu}
            className={` fixed right-5 top-5 ${
              !isOpen ? "text-black" : "text-black"
            } focus:outline-none focus:ring-0 `}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          </button>
        </div>
        <ul className=' text-black flex flex-col items-center justify-center h-full'>
          <li className='py-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='py-4'>
            <Link href='/about'>About</Link>
          </li>
        </ul>
      </aside>
    </header>
  );
};
