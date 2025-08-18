"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiMenu } from "react-icons/fi"; // hamburger icon
import { IoClose } from "react-icons/io5"; // close icon
import { usePathname } from "next/navigation";

const SidebarNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-lg shadow-lg bg-black/70 border border-white/10 hover:scale-110 transition"
      >
        {open ? (
          <IoClose className="w-6 h-6 text-white" />
        ) : (
          <FiMenu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-0 left-0 h-full w-64 z-[5000] flex flex-col space-y-6 px-6 py-10",
              "bg-gradient-to-b from-gray-900 via-black to-gray-950 backdrop-blur-xl shadow-2xl border-r border-white/10",
              className,
            )}
          >
            <h2 className="text-lg font-semibold text-white tracking-wide mb-6">
              Menu
            </h2>

            {navItems.map((navItem: any, idx: number) => {
              const isActive = pathname === navItem.link; // ✅ check path
              return (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-gray-700 text-white shadow-md" // Active state
                      : "text-gray-300 hover:text-white hover:bg-gray-800/60",
                  )}
                >
                  {navItem.name}
                </Link>
              );
            })}

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className={cn(
                "relative flex items-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
                pathname === "/"
                  ? "bg-gray-700 text-white shadow-md"
                  : "text-gray-300 hover:text-white hover:bg-gray-800/60",
              )}
            >
              Home
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SidebarNav;
