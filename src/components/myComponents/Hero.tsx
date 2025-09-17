"use client";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <main>
        <BackgroundBeamsDemo />
        <Hero2 />
      </main>
    </>
  );
};

export default Hero;

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Hero2 } from "./Hero2";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-[40rem]   w-full rounded-md border border-neutral-950    relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold w-fit ">
          Boost Your Reach Across{" "}
          <span className="text-indigo-400">Social Media</span>
        </h1>
        <p className="bg-gradient-to-r  text-transparent bg-clip-text    from-zinc-200 to-yellow-100  text-xl   text-neutral-500 max-w-lg   mx-auto my-2    text-center relative ">
          AI-powered insights to maximize your content’s visibility on every
          platform.
        </p>
        <div className="flex gap-4 justify-center my-4">
          {/* Primary Button */}
          <Link className="z-[99]" href="/sign-up">
            <button
              className="  px-6 py-3 rounded-xl text-white font-semibold 
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                     shadow-lg hover:opacity-90 transition"
            >
              Get Started for free
            </button>
          </Link>

          {/* Secondary Button */}
          <button
            onClick={() => {
              document.getElementById("demo")?.scrollIntoView({
                behavior: "smooth", // smooth scrolling
                block: "start",
              });
            }}
            className="px-6 py-3 rounded-xl font-medium z-[99] 
                     border border-gray-400 text-gray-200 
                     hover:bg-gray-800 transition"
          >
            See Demo
          </button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
