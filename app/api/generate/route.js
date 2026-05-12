import OpenAI from "openai";

export async function POST(req) {
  try {
    // Check for API key
    if (!process.env.GROQ_API_KEY) {
      return Response.json({
        error: "GROQ_API_KEY is not set. Please add it to your environment variables.",
      }, { status: 500 });
    }

    const client = new OpenAI({
      apiKey: process.env.GROQ_API_KEY,
      baseURL: "https://api.groq.com/openai/v1",
    });

    const body = await req.json();

    const prompt = `
Generate 5 social media captions.

Topic: ${body.topic}
Mood: ${body.mood}
Platform: ${body.platform}

Add emojis and hashtags.
`;

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.8,
    });

    return Response.json({
      result: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Caption generation error:", error);
    return Response.json({
      error: error.message || "Failed to generate caption",
      details: error.toString(),
    }, { status: 500 });
  }
}
