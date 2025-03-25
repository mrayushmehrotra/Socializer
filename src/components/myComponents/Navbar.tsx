"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isUser, setIsUser] = useState<boolean>(false);

  useEffect(() => {
    setIsUser(isSignedIn ?? false);
  }, [isSignedIn]);

  return (
    <nav className="flex items-center space-x-6 px-8 py-3 text-white shadow-md rounded-full">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          draggable={false}
          src="/logo.png"
          height={40}
          width={40}
          alt="logo"
        />
      </div>

      <div className="flex w-full backdrop-blur-2xl bg-opacity-35 bg-zinc-700 px-4 py-2 rounded-xl items-center justify-between">
        {/* Navigation Links with Group Hover */}
        <ul className="flex space-x-6 text-sm font-medium group">
          {[
            { name: "Home", path: "/" },
            { name: "Enterprise", path: "/demo" },
            { name: "Pricing", path: "/demo" },
            { name: "Customers", path: "/demo" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                draggable={false}
                href={item.path}
                className="px-2 py-1 rounded-md transition-all duration-200  hover:text-gray-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Section with Group Hover */}
        <ul className="flex items-center space-x-6 text-sm font-medium group">
          {[
            { name: "About us", path: "/about" },
            { name: "Careers", path: "/demo" },
            { name: "Blog", path: "/demo" },
            { name: "Contact", path: "/demo" },
            { name: "Docs", path: "/demo" },
          ].map((item, index) => (
            <li key={index}>
              <Link
                draggable={false}
                href={item.path}
                className="flex items-center px-2 py-1 rounded-md transition-all duration-200  hover:text-gray-300"
              >
                {item.name} <MoveUpRight size={15} className="ml-1" />
              </Link>
            </li>
          ))}
          <li>
            {isUser ? <UserButton /> : <Link href="/login">Login ↗</Link>}
          </li>
          <li>
            <Link href={isUser ? "/dashboard" : "/get-started"}>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                {isUser ? "Dashboard" : "Get Started"}
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
