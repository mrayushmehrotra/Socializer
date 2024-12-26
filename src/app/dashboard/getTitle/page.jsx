"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LiaTelegram } from "react-icons/lia";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const Page = () => {
  const [data, setData] = useState("");
  const [botresponse, setBotResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = -1;
    if (botresponse) {
      setDisplayText("");
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + botresponse.charAt(i));
        i++;
        if (i >= botresponse.length) clearInterval(interval);
      }, 1); // Faster typing speed
      setData("");
      return () => clearInterval(interval);
    }
  }, [botresponse]);

  const handleInput = async () => {
    if (!data.trim()) return;
    setLoading(true);

    const myData =  "Act as the Experienced Youtubter expert who gives 100% accurate Titles and user attractive titles and a youtuber who knows the youtube algorithm and give me the most suitable and most attractive description for wide range audience for this title (give me only Seo friendly description and nothing else): " 

    try {
      const res = await axios.post("/api/gemini", {
        prompt: myData +" " + data,
      });

      if (res.data.success) {
        setBotResponse(res.data.data);
      } else {
        setBotResponse("Failed to fetch response. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setBotResponse(
        "There was an error processing your request. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full flex justify-center h-screen ">
      <div className="w-[80%]  border border-gray-600 bg-black rounded-xl shadow-lg overflow-hidden mx-auto ">
        <div className="main p-6 sm:p-12 container mx-auto flex flex-col gap-8">
          {/* Right Side - Bot Response */}
          <div className="w-full">
            {loading ? (
              <Skeleton className="h-[125px] w-[250px] rounded-xl mt-4" />
            ) : (
              <h1 className="text-white mt-6 whitespace-pre-line">
                {displayText}
              </h1>
            )}
          </div>
          {/* Footer - Input and Button */}
          <div className="fixed bottom-0 left-0 w-full bg-black p-6 flex justify-center">
            <div className="w-1/2">
              <Input
                className="border border-white text-white p-2 text-[1rem] w-full"
                value={data}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleInput();
                  }
                }}
                onChange={(e) => setData(e.target.value)}
                placeholder="Enter your prompt here"
              />
              <Button
                variant="outline"
                className={
                  loading
                    ? "bg-red text-red-600 hover:text-red-900 p-4 mt-4 "
                    : "bg-white text-black hover:text-white p-4 mt-4"
                }
                onClick={handleInput}
                disabled={loading}
              >
                {loading ? (
                  <h1>Loading..</h1>
                ) : (
                  <h1 className="flex">
                    Generate &nbsp; <LiaTelegram style={{ scale: 1.5 }} />
                  </h1>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
