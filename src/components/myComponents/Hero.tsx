import React from "react";
import { Button } from "@/components/ui/button";
import Typed from "@/Utils/Typed";
import { FaArrowRight } from "react-icons/fa";
import Marquee from "../magicui/marquee";
import { cn } from "@/lib/utils";
import { JetBrains_Mono } from "next/font/google";
import TextsReveal from "@/components/myComponents/TextsReveal";
import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";
const inter = JetBrains_Mono({ weight: "400", preload: false });
const Hero = () => {
  const reviews = [
    {
      name: "Avinash Kumar",
      username: "@avinashkumar",
      body: "I've never seen anything like this before. It's amazing. I love it.",
    },
    {
      name: "Priyanka Singh",
      username: "@priyankasingh",
      body: "I don't know what to say. I'm speechless. This is amazing.",
    },
    {
      name: "Rahul Gupta",
      username: "@rahulgupta",
      body: "I'm at a loss for words. This is amazing. I love it.",
    },
    {
      name: "Neha Sharma",
      username: "@nehasharma",
      body: "I'm at a loss for words. This is amazing. I love it.",
    },
    {
      name: "Amit Verma",
      username: "@amitverma",
      body: "I'm at a loss for words. This is amazing. I love it.",
    },
    {
      name: "Meena Kumari",
      username: "@meenakumari",
      body: "I'm at a loss for words. This is amazing. I love it.",
    },
  ];
  const firstRow = reviews.slice(0, reviews.length / 2);

  const ReviewCard = ({
    name,
    username,
    body,
  }: {
    name: string;
    username: string;
    body: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-700 bg-gray-950/[.01] hover:bg-gray-50/[.05] , hover:translate-y-1  ",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.5]",
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <div className="flex text-white  flex-col gap-y-2  ">
            <figcaption className="text-sm  font-medium  dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium  text-zinc-400    dark:text-white/40">
              {username}
            </p>
          </div>
        </div>
        <blockquote className="mt-2 text-white  text-sm">{body}</blockquote>
      </figure>
    );
  };

  return (
    <>
      <main className="flex text-white max-h-screen flex-col items-center justify-between p-24 overflow-x-hidden  ">
        <BoxReveal boxColor={"#09090b"} duration={0.5}>
          <h1 className="text-8xl m-4 font-  ">
            An <span>AI</span>{" "}
          </h1>
        </BoxReveal>
        <h1 className={`text-8xl mt-2 text-center ${inter.className}  `}>
          {" "}
          <Typed />
        </h1>
        <Link href="/sign-up">
          <Button
            className="bg-white p-5  mt-12 text-black rounded-sm"
            variant={"outline"}
          >
            Get Started &nbsp; <FaArrowRight />
          </Button>
        </Link>
      </main>
      <Marquee pauseOnHover className="   [--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="mt-12"></div>
      <h1>
        <TextsReveal
          text="Your AI Companion is your best friend :) 
        It is here to assist you, provide insights, and make your life easier. 
        AI is not just a tool but a trusted ally that learns and grows with you. 
        It is always ready to help, offering knowledge and support right at your fingertips."
        />
      </h1>
    </>
  );
};

export default Hero;
