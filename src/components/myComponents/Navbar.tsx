"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

import NavTyped from "@/Utils/NavTyped";

const Navbar = () => {
  const { isSignedIn } = useUser(); // Ensure you're using `useUser` to get isSignedIn
  const [isUser, setIsUser] = useState<boolean>(false);

  useEffect(() => {
    // Ensure that isSignedIn is boolean or default to false
    setIsUser(isSignedIn ?? false);
  }, [isSignedIn]);

  return (
    <div className="flex p-7 text-white items-center justify-between">
      <Link href="/">
        <div className="flex">
          <h1 className="text-xl font-bold">Sathi&nbsp;|&nbsp;</h1>
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
  );
};

export default Navbar;
