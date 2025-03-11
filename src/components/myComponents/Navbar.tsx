"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

import NavTyped from "@/Utils/NavTyped";
import Image from "next/image";

const Navbar = () => {
  const { isSignedIn } = useUser(); // Ensure you're using `useUser` to get isSignedIn
  const [isUser, setIsUser] = useState<boolean>(false);

  useEffect(() => {
    // Ensure that isSignedIn is boolean or default to false
    setIsUser(isSignedIn ?? false);
  }, [isSignedIn]);

  return (
    <div className="flex p-4 text-white items-center  justify-center">
      <div className="flex items-center justify-between  px-6 py-4    border-b boder-b-zinc-400    w-[60%]">
        <Link href="/">
          <div className="flex   items-center justify-center gap-x-2 ">
            <Image src="/logo.png" height={50} width={50} alt="logo" />
            <h1 className="text-xl font-bold">
              <NavTyped />{" "}
            </h1>
          </div>
        </Link>
        <ul className="flex space-x-4 items-center ">
          <li>
            {isUser ? (
              <UserButton />
            ) : (
              <Link href="/sign-in">
                <Button>Already a user?</Button>
              </Link>
            )}
          </li>
          <li>
            <Link href={isUser ? "/dashboard" : "/sign-up"}>
              <Button
                className="bg-white text-black rounded-lg"
                variant="outline"
              >
                {isUser ? "Dashboard" : "Get Started"}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      <hr className="overflow-hidden" />
    </div>
  );
};

export default Navbar;
