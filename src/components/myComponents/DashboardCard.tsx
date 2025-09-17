"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Props {
  CardTitle: string;
  about: string;
  link: string;
  origin: string;
  icon: LucideIcon;
}

const DashboardCard = ({ CardTitle, about, link, origin, icon }: Props) => {
  const [displayOrigin, setDisplayOrigin] = useState(origin);

  const Icon = icon;
  // helper to generate random letters
  const getRandomChar = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const handleHover = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayOrigin((prev) =>
        origin
          .split("")
          .map((char, i) => {
            if (i < iteration) return origin[i];
            return getRandomChar();
          })
          .join(""),
      );

      iteration += 1 / 3; // speed of reveal
      if (iteration >= origin.length) {
        clearInterval(interval);
        setDisplayOrigin(origin);
      }
    }, 50); // refresh speed
  };

  return (
    <div
      onMouseEnter={handleHover}
      className="w-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-black
  sm:max-w-[70%]  md:max-w-md lg:max-w-lg border border-zinc-700 rounded-xl shadow-lg overflow-hidden mx-auto transition-transform duration-300 hover:scale-105"
    >
      <Link href={link}>
        <div className="flex flex-col px-4 sm:px-6 py-4">
          {/* Origin title with scramble effect */}
          <div className="text-xs text-gray-400 uppercase tracking-wider cursor-pointer">
            {displayOrigin}
          </div>

          {/* Main Card Title */}
          <div className=" flex gap-x-4 text-md font-semibold ">
            {CardTitle} <Icon />
          </div>
        </div>

        <div className="px-4 sm:px-6 py-4">
          <div className="text-sm text-gray-300">{about}</div>
        </div>

        <div className="flex items-center p-4 space-x-4">
          <Button className="px-4 py-2 text-white border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
            Go
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default DashboardCard;
