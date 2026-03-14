"use client";

import Link from "next/link";
import Logo from "@/components/atoms/Logo";

export default function ProductsPage() {
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

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-[#F5F5F5]">
          <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
          <span className="text-xs font-medium tracking-wider uppercase text-black/60">
            Under Development
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-2xl space-y-4">
          <h1 className="font-instrument-sans text-5xl sm:text-6xl lg:text-7xl font-semibold text-black leading-[0.95]">
            Products
          </h1>
          <h2 className="font-instrument-serif text-4xl sm:text-5xl lg:text-6xl italic text-black/40 leading-[0.95]">
            Coming Soon
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-md text-base sm:text-lg text-black/50 font-light leading-relaxed">
          Our product catalog is being prepared. Premium UI kits, templates, and
          design resources will be available here soon.
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-black/20" />

        {/* Back button */}
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
      </div>
    </main>
  );
}
