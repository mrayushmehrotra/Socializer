"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp, FaCheck } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import toast from "react-hot-toast";
import { SecondNav } from "@/components/myComponents/nav2";
const Page = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
          "you are the best youtuber in the world yeah, you google gemini you have to help this guy for creating the best Description so that he can reach more audience in less time and his channel should keep growing, just write a SEO description without any extra BS, else it will be rejected",
      });
      const botMessage = {
        text: response.data.success
          ? response.data.data
          : "Failed to fetch response. Try again.",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error processing request.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast.success("copied");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <SecondNav />

      <div className="flex flex-col h-screen bg-[#101418] text-white">
        <h1 className="text-4xl font-serif font-semibold text-center p-5 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Generate an SEO Friendly Description for your next post
        </h1>
        <div className="flex-1 overflow-y-auto p-6 space-y-4 relative">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-4 rounded-xl max-w-lg text-black  text-sm shadow-md relative group cursor-pointer transition-all duration-300 ${
                  msg.sender === "user"
                    ? "bg-[#BAD7F5] hover:bg-blue-700"
                    : "bg-gray-200 hover:bg-gray-400"
                }`}
                onClick={() => copyToClipboard(msg.text)}
              >
                {msg.text}
                <span className="absolute bg-[#BAD7f5] font-bold -top-4 -right-6 text-black p-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Copy
                </span>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="p-4 rounded-xl max-w-lg bg-gray-800 space-y-2 animate-pulse">
                <Skeleton className="h-4 w-48 bg-gray-700 rounded" />
                <Skeleton className="h-4 w-40 bg-gray-700 rounded" />
                <Skeleton className="h-4 w-44 bg-gray-700 rounded" />
              </div>
            </div>
          )}
          <div ref={chatRef}></div>
        </div>
        <div className="p-4 border-t border-gray-700 bg-[#12171d] rounded-xl flex items-center gap-2">
          <Input
            className="flex-1 p-3 bg-gray-800 text-black  border border-gray-700 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Describe your YouTube content..."
          />
          <button
            className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
            onClick={handleSendMessage}
            disabled={loading}
          >
            <FaArrowUp className="text-lg" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
