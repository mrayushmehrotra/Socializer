"use client";

import React from "react";
import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const Page = () => {
  return (
    <div className="flex items-center justify-center glassmorphism-auth h-screen w-full">
      <SignUp
        fallbackRedirectUrl="/dashboard"
        appearance={{
          baseTheme: dark,
          variables: {
            colorBackground: "#131316",
          },
        }}
      />
    </div>
  );
};

export default Page;
