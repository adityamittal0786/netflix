import { Play, Info } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    setEmailError("");
    // Here you would typically submit to your backend
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=800&fit=crop')",
          backgroundPosition: "center",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-4 md:px-12 pt-24 md:pt-0">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            Unlimited films, series and more
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Starts at $15.98. Cancel at any time.
          </p>

          {/* Email Signup Form */}
          <form onSubmit={handleEmailSubmit} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-3 mb-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className="flex-1 px-4 py-3 rounded bg-white/20 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:border-red-600 focus:bg-white/30 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Get Started
                <span className="text-xl">›</span>
              </button>
            </div>
            {emailError && <p className="text-red-400 text-sm">{emailError}</p>}
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded transition-colors duration-200 backdrop-blur-sm">
              <Play className="w-5 h-5 fill-white" />
              Play
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-bold rounded transition-colors duration-200 backdrop-blur-sm">
              <Info className="w-5 h-5" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="text-white text-sm mb-2 text-center">Scroll to explore</div>
        <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
