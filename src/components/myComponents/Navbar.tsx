"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { MoveUpRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isUser, setIsUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsUser(isSignedIn ?? false);
  }, [isSignedIn]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "" },
    { name: "Customers", path: "" },
  ];

  const rightLinks = [
    { name: "About Us", path: "#about" },
    { name: "Demo", path: "#demo" },
    { name: "Contact", path: "#footer" },
  ];

  return (
    <nav className="w-full fixed top-4 left-0 z-50 px-4 text-white">
      <div
        className="flex items-center justify-between max-w-7xl mx-auto 
        bg-zinc-900/50 backdrop-blur-xl border border-white/10 
        rounded-2xl shadow-lg px-6 py-3"
      >
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Image
            draggable={false}
            src="/logo.png"
            height={40}
            width={40}
            alt="logo"
            className="rounded-lg"
          />
          <button
            className="md:hidden text-gray-300 hover:text-white transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex w-full items-center justify-between ml-6">
          {/* Left Links */}
          <ul className="flex space-x-6 text-sm font-medium">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  draggable={false}
                  href={item.path}
                  className="px-2 py-1 text-md rounded-md transition-all duration-200 hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Links */}
          <ul className="flex items-center space-x-6 text-md font-medium">
            {rightLinks.map((item, index) => (
              <li key={index} className="hidden lg:block">
                <Link
                  draggable={false}
                  href={item.path}
                  className="flex items-center px-2 py-1 rounded-md group transition-all duration-200 hover:text-gray-300"
                >
                  {/* Left Arrow - slides in smoothly */}
                  <MoveUpRight
                    size={15}
                    className="mr-1 opacity-0 -translate-x-2 -translate-y-2 rotate-[-15deg]
               group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0
               transition-all duration-75 ease-out"
                  />

                  {/* Text */}
                  <span className="group-hover:translate-x-1 transition-all duration-300 ease-out">
                    {item.name}
                  </span>

                  {/* Right Arrow - slides out smoothly */}
                  <MoveUpRight
                    size={15}
                    className="ml-3 opacity-100 translate-x-0 translate-y-0 rotate-0
               group-hover:opacity-0 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:rotate-12
               transition-all duration-75 ease-in"
                  />
                </Link>
              </li>
            ))}

            {/* Auth */}
            <li>
              {isUser ? (
                <UserButton />
              ) : (
                <Link href="/sign-in" className="hidden lg:block">
                  Login
                </Link>
              )}
            </li>
            <li>
              <Link href={isUser ? "/dashboard" : "/sign-up"}>
                <button className="bg-[#BAD7F5] hover:scale-95 text-black px-4 py-2 rounded-xl shadow-md transition-all duration-200">
                  {isUser ? "Dashboard" : "Get Started"}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className="md:hidden mt-3 mx-4 absolute top-20 left-0 right-0 
          bg-zinc-900/90 backdrop-blur-xl border border-white/10 
          rounded-2xl shadow-xl z-40 p-6 transition-all duration-300"
        >
          <ul className="flex flex-col space-y-4">
            {[...navLinks, ...rightLinks].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className="block px-4 py-3 rounded-md text-lg hover:bg-zinc-800/50 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {/* Auth */}
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
                    className="px-4 py-2 rounded-md hover:bg-zinc-800/50"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )}
                <Link
                  href={isUser ? "/dashboard" : "/sign-up"}
                  onClick={() => setIsOpen(false)}
                >
                  <button className="bg-[#BAD7F5] hover:scale-95 text-black px-4 py-2 rounded-xl shadow-md transition-all duration-200">
                    {isUser ? "Dashboard" : "Get Started"}
                  </button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
