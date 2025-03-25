"use client";
import React from "react";
const Hero = () => {
  return (
    <>
      <main>
        <BackgroundBeamsDemo />
        <Hero2 />
        <FollowingPointer />
      </main>
    </>
  );
};

export default Hero;

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Hero2 } from "./Hero2";
import { ContainerTextFlip } from "../ui/container-text-flip";
import { FollowingPointer } from "./followingPointer";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem] border border-zinc-800  w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Improve your video reach on <br />
          <ContainerTextFlip words={["Instagram", "Facebook", "X"]} />
        </h1>
        <p className="bg-gradient-to-r  text-transparent bg-clip-text    from-yellow-200 to-red-300  text-xl   text-neutral-500 max-w-lg   mx-auto my-2    text-center relative ">
          and other social media platform&apos;s too
        </p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to Sathi, the best CaaS (content as a service) web platform
          that provides latest and trending services for your video to get the
          maximum reach on all different platform&apos;s.
        </p>
        <input
          type="text"
          placeholder="hi@manuarora.in"
          className="  px-4 py-2 rounded-full   border-zinc-800  border  focus:ring-2 focus:ring-zinc-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
