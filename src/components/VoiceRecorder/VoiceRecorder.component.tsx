"use client";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { PrimaryText } from "@/ui";
import React, { FC, useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useRouter } from "next/navigation";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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

  useEffect(() => {
    setVoiceInput(transcript);
    if (transcript.toLowerCase() === "about") {
      router.push("/about");
    }
    if (transcript.toLowerCase() === "home") {
      router.push("/");
    }
    if (
      transcript.toLowerCase() === "blogs" ||
      transcript.toLowerCase() === "blog"
    ) {
      router.push("/travel-blog");
    }
    if (
      transcript.toLowerCase() === "menu" ||
      transcript.toLowerCase() === "mini"
    ) {
      setIsOpen(!isOpen);
    }
  }, [transcript]);
  return (
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
      <div className=' flex border w-28 h-10 shadow-md  rounded-lg cursor-pointer '>
        {hoovering ? (
          <PrimaryText text='SPEAK' />
        ) : (
          <PrimaryText text={voiceInput} />
        )}
      </div>
      <div className='border w-5 h-5 shadow-md   rounded-full  ' />
      <div className='border w-3 h-3 shadow-md   rounded-full ' />
    </div>
  );
};
//   if (!browserSupportsSpeechRecognition) {
//     return <PrimaryText text='Browser doesnt support speech recognition.' />;
//   }
