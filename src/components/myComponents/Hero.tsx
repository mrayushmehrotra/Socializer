import React from "react";
import { Button } from "@/components/ui/button";
import Typed from "@/Utils/Typed";
import { FaArrowRight } from "react-icons/fa";
import { JetBrains_Mono } from "next/font/google";
import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";
const inter = JetBrains_Mono({ weight: "400", preload: false });
const Hero = () => {

  

  return (
    <>
        <main className="flex text-white max-h-screen flex-col items-center justify-between lg:p-24 md:p-12 p-8  overflow-x-hidden  ">
        <BoxReveal boxColor={"#09090b"} duration={0.2}>
          <h1 className="md:text-6xl lg:text-8xl text-4xl m-4  ">
            An <span>AI</span>{" "}
          </h1>
        </BoxReveal>
        <h1 className={`md:text-6xl lg:text-8xl text-4xl  mt-2 text-center ${inter.className}  `}>
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
     
      
   
    </>
  );
};

export default Hero;
