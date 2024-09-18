import React from "react";
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
const page = () => {
  return (
    <div className="flex items-center justify-center glassmorphism-auth h-screen w-full">
      <SignIn
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

export default page;
