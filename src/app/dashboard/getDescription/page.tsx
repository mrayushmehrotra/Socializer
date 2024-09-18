
"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LiaTelegram } from "react-icons/lia";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  const [data, setData] = useState({
    userInput: "",
  });
  const [responses, setResponses] = useState([]); // State to hold all bot responses
  const [loading, setLoading] = useState(false);

  const handleInput = async () => {
    if (!data.userInput.trim()) return; // Prevent API call if input is empty

    setLoading(true);
    try {
      const res = await axios.post("/api/gemini", {
        userInput:
          "Act as the Experienced SEO Expert and a youtuber who knows the youtube algorithm and give me the most suitable and most attractive description for wide range audience for this title (give me only Seo friendly description and nothing else): " +
          data.userInput,
      });

      const generatedText = res.data.data || "No response";

      // Append the new response to the array of responses
      setResponses((prevResponses) => [
        ...prevResponses,
        { userInput: data.userInput, botResponse: generatedText },
      ]);

      setData({ userInput: "" }); // Clear input after generating
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setResponses((prevResponses) => [
        ...prevResponses,
        {
          userInput: data.userInput,
          botResponse:
            "There was an error processing your request. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main p-6 sm:p-12 container mx-auto">
      <div className="mt-6">
        <Input
          className="border border-white text-white p-2 text-[1rem] w-full"
          value={data.userInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleInput();
            }
          }}
          onChange={(e) => setData({ ...data, userInput: e.target.value })}
          placeholder="Enter your prompt here"
        />
        <Button
          variant="outline"
          className={
            loading
              ? "bg-red text-red-800 hover:text-red-900 p-4 mt-4"
              : "bg-white text-black hover:text-white p-4 mt-4"
          }
          onClick={handleInput}
          disabled={loading}
        >
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <h1 className="flex">
              Generate &nbsp; <LiaTelegram style={{ scale: 1.5 }} />
            </h1>
          )}
        </Button>
      </div>

      <div className="mt-6">
        {loading && <Skeleton className="w-full h-20" />}
        {/* Render a new card for each response */}
          <main className=" flex container items-center space-x-4 p-9">
        {responses.map((response, index) => (
          <Card className="w-[450px] text-white hover:text-white mt-4" key={index}>
            <CardHeader>
              <CardTitle className="text-2xl text-zinc-200">
                {response.userInput}
              </CardTitle>
              <br />
              <CardDescription className="text-zinc-400">
                <ReactMarkdown>{response.botResponse}</ReactMarkdown>
              </CardDescription>
            </CardHeader>
            {/* <CardFooter className="flex justify-between"> */}
            {/*   <Button className="bg-white text-black rounded-md border border-white p-4 hover:text-white"> */}
            {/*     <LiaTelegram /> */}
            {/*   </Button> */}
            {/* </CardFooter> */}
          </Card>
        ))}
          </main>
      </div>
    </div>
  );
};

export default Page;
