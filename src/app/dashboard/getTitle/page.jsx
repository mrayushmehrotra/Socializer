"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { SecondNav } from "@/components/myComponents/nav2";
const Page = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
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
          "you are the best youtuber in the world yeah, you google gemini you have to help this guy for creating the best title for his video so that he can reach more audience in less time and his channel should keep growing",
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

  return (
    <>
      <SecondNav />
      <div className="flex flex-col h-screen bg-[#101418] text-white">
        <h1 className="text-4xl font-serif  font-semibold text-center p-5  ">
          Generate an SEO Friendly Title for your next post{" "}
        </h1>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-4 rounded-xl max-w-lg text-sm shadow-md ${msg.sender === "user" ? "bg-blue-600" : "bg-gray-700"}`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {loading && <Skeleton className="h-6 w-32 rounded-xl bg-gray-700" />}
          <div ref={chatRef}></div>
        </div>
        <div className="p-4 border-t border-gray-700 bg-[#12171d] rounded-xl  flex items-center gap-2">
          <Input
            className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-xl text-black placeholder-gray-500 focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type a message..."
          />
          <button
            className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 disabled:opacity-50"
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
