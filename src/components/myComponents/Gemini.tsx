 //
 // "use client";
 // import React, { useState, ChangeEvent, useEffect } from "react";
 // import axios from "axios";
 // //@ts-ignore
 //
 //
 // const PALM_API_KEY = process.env.PALM_API_KEY;
 //
 // interface Message {
 //   id: number;
 //   text: string;
 //   sender: "user" | "bot";
 //   timestamp: number;
 // }
 //
 // const ChatBot: React.FC = () => {
 //   const [messages, setMessages] = useState<Message[]>([]);
 //
 //   const [inputText, setInputText] = useState<string>("");
 //   const [loading, setLoading] = useState<boolean>(false);
 //
 //   return (
 //     <div className="p-6 bg-gray-100 min-h-screen">
 //       <h1 className="text-3xl font-bold mb-6 text-center">Scrape Talk</h1>
 //
 //       <div className="mb-4">
 //         <input
 //           type="text"
 //           placeholder="Paste the YouTube URL"
 //           value={ytUrl}
 //           onChange={(e) => setYtUrl(e.target.value)}
 //           className="w-full p-3 border rounded-lg text-black mb-2"
 //         />
 //         <button
 //           //@ts-ignore
 //           onClick={() => fetchSubtitles(extractYouTubeVideoId())}
 //           className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
 //         >
 //           Learn
 //         </button>
 //       </div>
 //
 //       <div className="space-y-4 mb-4">
 //         {messages.map((message) => (
 //             <div
 //             key={message.id}
 //             className={`flex ${
 //                 message.sender === "user" ? "justify-end" : "justify-start"
 //             }`}
 //           >
 //             <div
 //               className={`p-4 rounded-lg max-w-xl ${
 //                   message.sender === "user"
 //                   ? "bg-blue-500 text-white"
 //                   : "bg-gray-200 text-black"
 //                 };
 //               }`}
 //             >
 //               <p>{message.text}</p>
 //               <p className="text-xs mt-2">
 //                 {new Date(message.timestamp).toLocaleTimeString()}
 //               </p>
 //             </div>
 //           </div>
 //         ))}
 //       </div>
 //
 //       <div className="flex">
 //         <input
 //           type="text"
 //           placeholder="Let's chat"
 //           value={inputText}
 //           onChange={(e) => setInputText(e.target.value)}
 //           className="flex-1 p-3 border rounded-lg text-black text-lg"
 //         />
 //         <button
 //           onClick={generateText}
 //           className="ml-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
 //         >
 //           {loading ? "Sending..." : "Send"}
 //         </button>
 //       </div>
 //     </div>
 //   );
 // };
 //
 // export default ChatBot;
