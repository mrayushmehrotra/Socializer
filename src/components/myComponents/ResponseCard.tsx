import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function CardData({
  botresponse,
  data,
}: {
  botresponse: string;
  data: string | any;
}) {
  return botresponse.length > 0 ? (
    <Card className="mt-4 bg-gray-800 text-white shadow-lg rounded-lg p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">{data}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Enables support for GFM like tables, strikethrough, etc.
          components={{
            // Customize how elements are rendered
            strong: ({ children }) => (
              <strong className="text-yellow-300 font-bold">{children}</strong>
            ),
            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 underline"
              >
                {children}
              </a>
            ),
            code: ({ inline, children }) =>
              inline ? (
                <code className="bg-gray-700 text-pink-400 rounded px-1 py-0.5">
                  {children}
                </code>
              ) : (
                <pre className="bg-gray-900 text-pink-400 rounded p-4 overflow-x-auto">
                  <code>{children}</code>
                </pre>
              ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside space-y-1">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-inside space-y-1">{children}</ol>
            ),
            li: ({ children }) => <li className="text-gray-300">{children}</li>,
            p: ({ children }) => <p className="text-gray-200">{children}</p>,
          }}
        >
          {botresponse}
        </ReactMarkdown>
      </CardContent>
    </Card>
  ) : (
    <div className="flex flex-col space-y-3 mt-4">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
