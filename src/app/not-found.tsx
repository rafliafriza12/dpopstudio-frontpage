"use client";
import Link from "next/link";
import Logo from "@/components/atoms/Logo";

export default function NotFound() {
  return (
    <main className="min-h-svh bg-white relative flex items-center justify-center overflow-hidden font-poppins">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full border border-black/5" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full border border-black/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full border border-black/3" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-6 py-20">
        {/* Logo */}
        <div className="mb-2">
          <Logo />
        </div>

        {/* 404 Big Text */}
        <div className="relative">
          <h1 className="text-[140px] sm:text-[200px] lg:text-[260px] font-instrument-sans font-bold text-black/[0.04] leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="font-instrument-sans text-4xl sm:text-5xl lg:text-6xl font-semibold text-black">
              Page Not Found
            </span>
            <div className="w-16 h-px bg-black/20" />
          </div>
        </div>

        {/* Description */}
        <p className="max-w-md text-base sm:text-lg text-black/50 font-light leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-black/85 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black/15 text-black/70 text-sm font-medium rounded-lg hover:bg-[#F5F5F5] hover:border-black/25 transition-all duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
