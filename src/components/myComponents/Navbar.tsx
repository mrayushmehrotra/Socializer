"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { MoveUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isUser, setIsUser] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsUser(isSignedIn ?? false);
  }, [isSignedIn]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Enterprise", path: "/demo" },
    { name: "Pricing", path: "/demo" },
    { name: "Customers", path: "/demo" },
  ];

  const rightLinks = [
    { name: "AboutUs", path: "#about" },
    { name: "Demo", path: "#demo" },
    { name: "Blog", path: "/demo" },
    { name: "Contact", path: "#footer" },
    { name: "Docs", path: "/demo" },
  ];

  return (
    <nav className="w-full px-4 py-4 md:px-8 md:mt-8 text-white">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and Mobile Menu Button */}
        <div className="flex items-center">
          <Image
            draggable={false}
            src="/logo.png"
            height={40}
            width={40}
            alt="logo"
          />
          <button
            className="md:hidden ml-4"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex w-full backdrop-blur-2xl bg-opacity-35 bg-zinc-700 px-4 py-4 rounded-xl items-center justify-between ml-3">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  draggable={false}
                  href={item.path}
                  className="px-1 py-1 rounded-md  text-md transition-all duration-200 hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section with Modified Hover Effect */}
          <ul className="flex items-center   space-x-6 text-md font-medium">
            {rightLinks.map((item, index) => (
              <li key={index} className="hidden lg:block">
                <Link
                  draggable={false}
                  href={item.path}
                  className="flex flex-row  items-center px-2 py-1 rounded-md transition-all duration-200 hover:text-gray-300 group"
                >
                  <MoveUpRight
                    size={15}
                    className="mr-1 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
                  />
                  <span className="group-hover:translate-x-2   transition-all duration-200">
                    {item.name}
                  </span>
                  <MoveUpRight
                    size={15}
                    className="ml-3 opacity-1000 group-hover:opacity-0 transition-all duration-200 -translate-x-2 group-hover:translate-x-2"
                  />
                </Link>
              </li>
            ))}
            <li>
              {isUser ? (
                <UserButton />
              ) : (
                <Link href="/login" className="hidden lg:block">
                  Login
                </Link>
              )}
            </li>
            <li>
              <Link href={isUser ? "/dashboard" : "/get-started"}>
                <button className="bg-[#BAD7F5] hover:scale-95 text-black px-4 py-2 rounded-xl">
                  {isUser ? "Dashboard" : "Get Started"}
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-zinc-800 bg-opacity-95 backdrop-blur-lg z-50 p-6 rounded-lg mx-4 shadow-xl">
            <ul className="flex flex-col space-y-4">
              {[...navLinks, ...rightLinks].map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.path}
                    className="block px-4 py-3 rounded-md text-lg hover:bg-zinc-700 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-zinc-700">
                <div className="flex items-center justify-between">
                  {isUser ? (
                    <div className="flex items-center">
                      <UserButton />
                      <span className="ml-2">Account</span>
                    </div>
                  ) : (
                    <Link
                      href="/sign-in"
                      className="px-4 py-2 rounded-md hover:bg-zinc-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                  <Link
                    href={isUser ? "/dashboard" : "/get-started"}
                    onClick={() => setIsOpen(false)}
                  >
                    <button className="bg-[#BAD7F5] hover:scale-95 text-black px-4 py-2 rounded-xl">
                      {isUser ? "Dashboard" : "Get Started"}
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
