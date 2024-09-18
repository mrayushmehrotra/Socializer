"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = () => {
  return (
    <Typewriter
      options={{
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Youtube")
          .pauseFor(1000)
          .deleteAll()
          .typeString(" Instagram")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
