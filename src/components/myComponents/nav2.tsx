"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

export function SecondNav() {
  const navItems = [
    {
      name: "Get Title",
      link: "/dashboard/getTitle",
    },
    {
      name: "Description",
      link: "/dashboard/getDescription",
    },
    {
      name: "Hashtags",
      link: "/dashboard/getHashtags",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav
        navItems={navItems}
        className="bg-[#bad7f5] font-semibold  text-black  "
      />
    </div>
  );
}
