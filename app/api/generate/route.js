import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
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
    return Response.json({
      error: error.message,
    });
  }
}
