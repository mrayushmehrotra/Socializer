import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log("prompt is here", prompt);
    if (!prompt) {
      return NextResponse.json(
        { success: false, message: "Prompt is required." },
        { status: 422 },
      );
    }

    const AIResponse = await model.generateContent([prompt]);
    return NextResponse.json(
      { success: true, data: AIResponse.response.text() },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process the request." },
      { status: 500 },
    );
  }
}
