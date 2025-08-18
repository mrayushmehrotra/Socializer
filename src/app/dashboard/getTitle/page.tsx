"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import toast from "react-hot-toast";
import { SecondNav } from "@/components/myComponents/nav2";
import UIWrapper from "@/components/myComponents/UIWrapper";

const Page = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("/api/gemini", {
        prompt:
          input +
          " you are the best YouTuber in the world, you (Google Gemini) must generate the BEST single YouTube title (SEO optimized, catchy, short). No fluff, no extras.",
      });

      const botMessage = {
        text: response.data.success
          ? response.data.data
          : "⚠️ Failed to fetch response. Try again.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "❌ Error processing request.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard ✅");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <UIWrapper classname="flex flex-col h-screen ">
      <div className="fixed top-0 left-0 w-full flex items-center justify-between z-20  backdrop-blur-md border-b border-gray-700 px-6 py-4">
        {/* Title on left */}
        <h1 className="text-2xl md:text-4xl font-bold">✨ Description</h1>
        <SecondNav />

        {/* Hamburger / SecondNav on right */}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 overflow-y-auto pt-6 space-y-4 pb-32">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex w-full ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              onClick={() => copyToClipboard(msg.text)}
              className={`relative p-4 rounded-2xl max-w-[80%] text-sm cursor-pointer transition-all duration-300 shadow-lg
              ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:scale-[1.02]"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              }`}
            >
              {msg.text}
              <span
                className={`absolute -top-5 text-xs font-medium transition-opacity opacity-0 group-hover:opacity-100 ${
                  msg.sender === "user"
                    ? "right-2 text-blue-400"
                    : "left-2 text-gray-500"
                }`}
              >
                📋 Copy
              </span>
            </div>
          </div>
        ))}

        {/* Loading animation */}
        {loading && (
          <div className="flex justify-start">
            <div className="p-4 rounded-2xl max-w-[70%] bg-gray-800 space-y-2 animate-pulse">
              <Skeleton className="h-4 w-48 bg-gray-700 rounded" />
              <Skeleton className="h-4 w-40 bg-gray-700 rounded" />
              <Skeleton className="h-4 w-44 bg-gray-700 rounded" />
            </div>
          </div>
        )}
        <div ref={chatRef}></div>
      </div>

      {/* Input Box */}
      <div className="fixed bottom-0 left-0 w-full rounded-md border-t border-gray-700 bg-gray-900/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            className="flex-1 border border-gray-700 bg-gray-800/80 text-white px-4 rounded-2xl  py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className=" rounded-full bg-white   p-2 shadow-md text-black   hover:opacity-90 transition flex items-center justify-center disabled:opacity-50"
          >
            <FaArrowUp className="text-lg" />
          </button>
        </div>
      </div>
    </UIWrapper>
  );
};

export default Page;
