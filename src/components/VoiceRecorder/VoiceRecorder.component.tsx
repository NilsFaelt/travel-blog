"use client";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { PrimaryText } from "@/ui";
import React, { FC, useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRouter } from "next/navigation";
import { DisplayInfoPopUp } from "./components";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}

export const VoiceRecorder: FC<Props> = ({ isOpen, setIsOpen }) => {
  const [voiceInput, setVoiceInput] = useState("");
  const [hoovering, setIsHoovering] = useState(false);
  const router = useRouter();

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const wordToDisplay = voiceInput.length > 1 ? transcript : "HOVER";
  console.log(listening);
  const restartMicrophone = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
    setTimeout(() => {
      SpeechRecognition.startListening();
    }, 100);
  };

  useEffect(() => {
    restartMicrophone();
    setVoiceInput(transcript);
    if (transcript.toLowerCase() === "about") {
      router.push("/about");
    }
    if (transcript.toLowerCase() === "home") {
      router.push("/");
    }
    if (
      transcript.toLowerCase() === "blogs" ||
      transcript.toLowerCase() === "glocks" ||
      transcript.toLowerCase() === "blog"
    ) {
      router.push("/travel-blog");
    }
    if (
      transcript.toLowerCase() === "menu" ||
      transcript.toLowerCase() === "mini"
    ) {
      setIsOpen(true);
    }
    if (
      transcript.toLowerCase() === "close" ||
      transcript.toLowerCase() === "cloose"
    ) {
      setIsOpen(false);
    }
    if (transcript.toLowerCase() === "contact") {
      scrollToBottom();
    }
  }, [transcript]);

  return (
    <div className='flex hidden sm:block flex-row gap-3 items-end z-20 items-center  '>
      {hoovering && <DisplayInfoPopUp />}

      <div
        className='flex flex-row gap-1 items-end z-20 '
        onMouseOver={() => {
          setIsHoovering(true);
          SpeechRecognition.startListening();
        }}
        onMouseLeave={() => {
          setIsHoovering(false);
          SpeechRecognition.stopListening();
        }}
      >
        <div
          className={`${
            listening && hoovering ? " bg-green-300" : " bg-red-300"
          } flex border w-28 h-10 shadow-md  rounded-lg cursor-pointer`}
        >
          {hoovering ? (
            <PrimaryText text='SPEAK' />
          ) : (
            <PrimaryText text={wordToDisplay} />
          )}
          <p></p>
        </div>
        <div className='bg-primary border w-5 h-5 shadow-md   rounded-full  ' />
        <div className='bg-secondary border w-3 h-3 shadow-md   rounded-full ' />
      </div>
    </div>
  );
};
