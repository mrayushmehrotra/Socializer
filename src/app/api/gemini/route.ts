import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

const apiUrl =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent";
const PALM_API_KEY = process.env.GEMINI_API_KEY;

async function callAPI(prompt: string, retryCount = 0) {
  try {
    const requestData = {
      contents: [
        {
          parts: [{ text: `Explain this briefly: ${prompt}` }],
        },
      ],
    };

    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      `${apiUrl}?key=${PALM_API_KEY}`,
      requestData,
      { headers }
    );

    return (
      response.data.candidates[0]?.content?.parts[0]?.text ||
      "No response received."
    );
  } catch (error: any) {
    if (error.response && error.response.status === 429) {
      const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
      console.warn(`Rate limited. Retrying in ${delay / 1000}s...`);

      if (retryCount < 5) {
        await new Promise((resolve) => setTimeout(resolve, delay)); // Delay before retry
        return callAPI(prompt, retryCount + 1);
      } else {
        console.error("Max retries reached.");
      }
    }
    throw error;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { success: false, message: "Prompt is required." },
        { status: 400 }
      );
    }

    // Delay to prevent rapid successive requests
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 sec delay

    const botResponse = await callAPI(prompt);
    console.log(botResponse);
    return NextResponse.json(
      { success: true, data: botResponse },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error generating text:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process the request." },
      { status: 500 }
    );
  }
}
