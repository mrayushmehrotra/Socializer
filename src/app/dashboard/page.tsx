"use client";

import { useState, useEffect } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import DashboardCard from "@/components/myComponents/DashboardCard";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  const Data = [
    {
      title: {
        main: "Craft Your SEO-Optimized Title",
        description:
          "Unlock the potential of your content with a captivating SEO-friendly title that draws viewers to your YouTube videos,posts, and other social media platforms.",
      },
      goto: "/dashboard/getTitle",
    },
    {
      title: {
        main: "Engaging SEO Description",
        description:
          "Boost your visibility online with an engaging SEO-friendly description that highlights your content's value, helping attract more viewers across platforms.",
      },
      goto: "/dashboard/getDescription",
    },
    {
      title: {
        main: "Generate Trending Hashtags",
        description:
          "Enhance your reach and discoverability by generating effective SEO-friendly hashtags that resonate with your target audience on social media.",
      },
      goto: "/dashboard/getHashtags",
    },
  ];

  return (
    <div className="w-full p-12  flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%]">
        {loading
          ? Data.map((_, index) => (
              <div key={index} className="w-full max-w-md">
                <Skeleton className="h-64 w-full rounded-lg" />
              </div>
            ))
          : Data.map((item, key) => (
              <DashboardCard
                key={key}
                about={item.title.description}
                CardTitle={item.title.main}
                link={item.goto}
              />
            ))}
      </div>
    </div>
  );
};

export default Page;
