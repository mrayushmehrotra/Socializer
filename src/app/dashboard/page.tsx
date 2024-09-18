"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LiaTelegram } from "react-icons/lia";
import Link from "next/link";

const Page = () => {
  const data = [
    {
      title: {
        main: "Craft Your SEO-Optimized Title",
        description: "Unlock the potential of your content with a captivating SEO-friendly title that draws viewers to your YouTube videos,posts, and other social media platforms.",
      },
      goto: "/dashboard/getTitle",
    },
    {
      title: {
        main: "Engaging SEO Description",
        description: "Boost your visibility online with an engaging SEO-friendly description that highlights your content's value, helping attract more viewers across platforms.",
      },
      goto: "/dashboard/getDescription",
    },
    {
      title: {
        main: "Generate Trending Hashtags",
        description: "Enhance your reach and discoverability by generating effective SEO-friendly hashtags that resonate with your target audience on social media.",
      },
      goto: "/dashboard/getHashtags",
    },
  ];

  return (
    <main className="flex container mx-auto items-center space-x-4 p-9 ">
      {data.map((item, index) => (
        <Card key={index} className="w-[450px] text-white hover:text-white">
          <CardHeader>
            <CardTitle className="text-2xl text-zinc-200">{item.title.main}</CardTitle>
            <br />
            <CardDescription className="text-zinc-400" dangerouslySetInnerHTML={{ __html: item.title.description }} />
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Button className="bg-white text-black rounded-md border border-white p-4 hover:text-white">
              <Link href={item.goto}>
                <LiaTelegram />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </main>
  );
};

export default Page;
