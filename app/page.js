"use client";

import { AlertCircle, Copy, Sparkles } from "lucide-react";
import Script from "next/script";
import { useState } from "react";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [mood, setMood] = useState("Funny");
  const [platform, setPlatform] = useState("Instagram");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const generateCaption = async () => {
    if (!topic.trim()) {
      setError("Please enter a topic");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          mood,
          platform,
        }),
      });

      if (!res.ok) throw new Error("Failed to generate caption");

      const data = await res.json();
      setResult(data.result || "");
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      generateCaption();
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h1 className="text-5xl font-bold text-white">Caption Generator</h1>
            <Sparkles className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-slate-300 text-lg">
            Create engaging captions powered by AI
          </p>
        </div>

        {/* Ad Unit */}
        <div className="mb-8 flex justify-center">
          {/* caption */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2081194634698590"
            data-ad-slot="9781859548"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script id="adsense-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          {/* Topic Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Topic or Idea
            </label>
            <input
              type="text"
              placeholder="e.g., Morning coffee, travel adventures, fitness goals..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition text-red-600 font-semibold placeholder-red-300 bg-white"
            />
          </div>

          {/* Mood & Platform */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Mood
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-red-600 font-semibold"
              >
                <option>Funny</option>
                <option>Inspirational</option>
                <option>Professional</option>
                <option>Creative</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Platform
              </label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-2 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-red-600 font-semibold"
              >
                <option>Instagram</option>
                <option>Twitter</option>
                <option>LinkedIn</option>
                <option>TikTok</option>
              </select>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-700">{error}</span>
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={generateCaption}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin">⏳</div>
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate Caption
              </>
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="space-y-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-slate-900">
                  Generated Caption:
                </h3>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <p className="text-red-600 font-semibold whitespace-pre-wrap leading-relaxed">
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
