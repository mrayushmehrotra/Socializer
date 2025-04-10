"use client";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
export function Hero2() {
  return (
    <div className="flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <h1 className="text-4xl font-bold text-center mb-16 text-[#D3EAF2] ">
          Why Use Socializer AI?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Cross Platform */}
          <Tilt tiltReverse={true} tiltMaxAngleY={10} tiltMaxAngleX={10}>
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-900 to-slate-950 rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-[#D3EAF2]">
                Multi-Platform Reach
              </h2>
              <p className="text-gray-400 mb-6">
                Automatically optimize content for TikTok, Instagram, YouTube,
                and more from a single creation workflow.
              </p>
              <div className="flex space-x-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  TikTok
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                  Instagram
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                  YouTube
                </span>
              </div>
            </div>
          </Tilt>

          {/* Card 2 - AI Powered */}
          <Tilt tiltReverse={true} tiltMaxAngleY={10} tiltMaxAngleX={10}>
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-900 to-slate-950  rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4  text-[#D3EAF2]">
                AI-Powered Optimization
              </h2>
              <p className="text-gray-400 mb-6">
                Our AI analyzes trends and automatically enhances your content
                for maximum engagement across all platforms.
              </p>
              <div className="flex items-center space-x-2 text-purple-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Real-time analytics</span>
              </div>
            </div>
          </Tilt>
          {/* Card 3 - Trusted Community */}
          <Tilt tiltReverse={true} tiltMaxAngleY={10} tiltMaxAngleX={10}>
            <div className="bg-gradient-to-br from-zinc-700 via-zinc-900 to-slate-950  rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4  text-[#D3EAF2]">
                Trusted Community
              </h2>
              <p className="text-gray-400 mb-6">
                Join 100+ creators already boosting their views and engagement
                with our proven tools and strategies.
              </p>
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden   border-2 border-white"
                    >
                      <Image
                        src="/ai_with_human.jpg"
                        height={40}
                        width={40}
                        alt="img"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="ml-3 text-sm text-gray-500">
                  100+ active creators
                </span>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
