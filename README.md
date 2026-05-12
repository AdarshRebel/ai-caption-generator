# AI Caption Generator

An AI-powered social media caption generator built with **Next.js**, **React**, and **Groq API**.

Generate engaging captions for Instagram, Twitter, LinkedIn, and TikTok with different moods and styles.

## Features

✨ **Professional UI** - Modern gradient design with Tailwind CSS  
🤖 **AI-Powered** - Uses Groq's LLaMA model for fast caption generation  
📱 **Multi-Platform** - Generate captions for Instagram, Twitter, LinkedIn, TikTok  
🎭 **Mood Selection** - Funny, Inspirational, Professional, Creative  
📋 **Copy to Clipboard** - One-click copy button  
⚡ **Real-time** - Instant feedback and loading states  

## Tech Stack

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Groq API** - AI model

## Setup Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/AdarshRebel/ai-caption-generator.git
   cd ai-caption-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   - Copy `.env.example` to `.env.local`
   - Get your Groq API key from [https://console.groq.com/keys](https://console.groq.com/keys)
   - Add it to `.env.local`:
     ```
     GROQ_API_KEY=your_api_key_here
     ```

4. **Run development server:**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions on **Vercel**, **Netlify**, or **Railway**.

## How It Works

1. Enter a topic (e.g., "Morning coffee")
2. Select mood and platform
3. Click "Generate Caption"
4. AI generates 5 captions instantly
5. Copy any caption to use on social media

## License

MIT
