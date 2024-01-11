"use client";
import { useEffect, useState } from "react";
import { VoiceRecorder } from "..";
import { Logo } from "@/ui";
import { Menu } from "./components";
import { BurgerButton } from "./components/BurgerButton.component";

export const Header = () => {
  const [displayVoiceMenu, setDisplayVoiceMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (navigator.userAgent.includes("Chrome")) {
      setDisplayVoiceMenu(true);
    }
  }, []);

  return (
    <header className='flex fixed top-0  z-10 justify-between items-center w-full h-20 box-border px-5  '>
      <Logo />
      {displayVoiceMenu && (
        <VoiceRecorder isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <BurgerButton setIsOpen={setIsOpen} isOpen={isOpen} />
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
