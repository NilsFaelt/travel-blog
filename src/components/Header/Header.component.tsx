"use client";
import { useCloseOnClickOutsideElement } from "@/hooks";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { DisplayVoiceKeyWord, VoiceRecorder } from "..";

export const Header = () => {
  const links = [
    { name: "home", link: "/" },
    { name: "blogs", link: "/travel-blog" },
    { name: "about", link: "/about" },
  ];
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [displayVoiceMenu, setDisplayVoiceMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useCloseOnClickOutsideElement(ref, setIsOpen);
  useEffect(() => {
    if (navigator.userAgent.includes("Chrome")) {
      setDisplayVoiceMenu(true);
    }
  }, []);

  return (
    <header className='flex fixed top-0  bg-white z-10 justify-between items-center w-full h-20 box-border px-5 border-b-2 '>
      <div className='rounded-md border border-primary   p-1 pl-2 pr-2  shadow-md'>
        <Link href={"/"}>
          <h1 className='text-xl text-black'>
            G<span className='text-secondary'>O</span>G
            <span className='text-secondary'>O</span>-TRAVEL
          </h1>
        </Link>
      </div>
      {displayVoiceMenu && (
        <VoiceRecorder isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <div className=' '>
        <button
          aria-label='open menu'
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
            aria-label='open menu'
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
        <ul className='w-full text-black flex flex-col items-center justify-center h-full'>
          {links.map((link, i) => {
            return (
              <li key={i} className='py-4 w-full'>
                <Link
                  className='block hover:bg-black hover:text-white text-center '
                  href={link.link}
                  style={{ width: "100%" }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <DisplayVoiceKeyWord text='CLOSE' />
      </aside>
    </header>
  );
};
