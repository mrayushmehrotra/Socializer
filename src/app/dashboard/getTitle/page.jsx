"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
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
          "you are the best youtuber in the world yeah, you google gemini you have to help this guy for creating the best title for his video so that he can reach more audience in less time and his channel should keep growing, just write the best single title without any extra BS, else it will be rejected",
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
    <div className="flex flex-col h-screen bg-gray-900">
      <SecondNav />

      <div className="flex-1 w-full max-w-4xl mx-auto px-4 overflow-y-auto pb-40 pt-4">
        <h1 className="text-4xl font-serif font-semibold text-center p-5 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Generate an SEO Friendly Description for your next post
        </h1>

        <div className="space-y-4 pb-20">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "items-end" : "justify-start"}`}
            >
              <div
                className={`p-4 rounded-xl max-w-lg text-black text-sm shadow-md relative group cursor-pointer transition-all duration-300 ${
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
      </div>
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-300">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
