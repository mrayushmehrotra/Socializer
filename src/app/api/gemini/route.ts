import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// Replace 'YOUR_API_KEY' with your actual API key from Google.
const PALM_API_KEY = process.env.PALM_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json(); // Parse the incoming request body
    const { userInput } = reqBody;

    // Ensure userInput is provided
    if (!userInput) {
      return NextResponse.json(
        {
          success: false,
          message: "userInput is required.",
        },
        { status: 400 }
      );
    }

    // API URL with the Gemini model
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${PALM_API_KEY}`;

    // Prepare the request payload
    const requestData = {
      contents: [
        {
          parts: [
            {
              text: userInput, // The user's input to be sent to the API
            },
          ],
        },
      ],
    };

    // Send the POST request to the API
    const response = await axios.post(apiUrl, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // If the API request is successful, return the generated content
    if (response.status === 200) {
  // Extract the bot response from the correct path
      const botResponse = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

     
console.log(botResponse);
      return NextResponse.json(
        {
          success: true,
          data: botResponse,
        },
        { status: 200 }
      );
    } else {
      // If the API request fails, return an error message
      return NextResponse.json(
        {
          success: false,
          message: "Failed to generate content.",
        },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error generating content:", error);
    // Handle errors and send appropriate response
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing the request.",
      },
      { status: 500 }
    );
  }
}
