"use client";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { useRouter } from "next/navigation";
import { DisplayInfoPopUp } from "./components";
import { PrimaryText } from "@/ui";
import React, { FC, useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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

  const restartMicrophone = () => {
    SpeechRecognition.stopListening();
    resetTranscript();
    setTimeout(() => {
      SpeechRecognition.startListening();
    }, 100);
  };

  useEffect(() => {
    setVoiceInput(transcript);
    restartMicrophone();
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
    //Blogs--Start
    if (transcript.toLowerCase() === "india") {
      router.push("/travel-blog/63hqC1VfvXGYFy0RQIL4W5");
    }
    if (transcript.toLowerCase() === "best") {
      router.push("/travel-blog/3yOffYhZvDDSX0Ah8BvqMF");
    }
    if (transcript.toLowerCase() === "tiny") {
      router.push("/travel-blog/7vak8cW1bd6H89ZqXsJEmN");
    }
    if (transcript.toLowerCase() === "waste") {
      router.push("/travel-blog/2x4AcAJVo2E9WzIBzYley2");
    }
    if (transcript.toLowerCase() === "warm") {
      router.push("/travel-blog/74xx5idIcjQ7dvsoCcrfo9");
    }
    if (transcript.toLowerCase() === "china") {
      router.push("/travel-blog/2TMxLfIkwEQU7pJRBPY4p6");
    }
    if (transcript.toLowerCase() === "belt") {
      router.push("/travel-blog/66cw7mgWvEu8yIKV4zM18q");
    }
    //Blogs--End
  }, [transcript]);

  const startListening = () => {
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "KeyX") {
        setIsHoovering(true);
        startListening();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === "KeyX") {
        stopListening();
        setIsHoovering(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
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
            listening && hoovering ? " bg-green-300" : " bg-pink-200"
          } flex border w-28 h-10 shadow-md  rounded-lg cursor-pointer border border-primary`}
        >
          {hoovering ? (
            <PrimaryText text='SPEAK' />
          ) : (
            <PrimaryText text={wordToDisplay} />
          )}
        </div>
        <div className='bg-primary border w-5 h-5 shadow-md   rounded-full  ' />
        <div className='bg-secondary border w-3 h-3 shadow-md   rounded-full ' />
      </div>
    </div>
  );
};
