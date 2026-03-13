"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ISocialPlatform } from "@/constant/social-platform";

interface SocialIconCardProps {
  platform: ISocialPlatform;
}

const SocialIconCard: React.FC<SocialIconCardProps> = ({ platform }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const getHoverFilter = () => {
    if (!isHovered) return "grayscale(100%)";
    if (platform.name === "Dribbble") return "brightness(0) invert(1)";
    return "none";
  };

  return (
    <div
      ref={cardRef}
      className="relative w-[140px] h-[140px] ipad-vertical:w-[180px] ipad-vertical:h-[180px] lg:w-[239.52px] lg:h-[239.52px] "
      style={{ cursor: isHovered ? "none" : "pointer" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Foreground white card — pops and rotates on hover */}
      <a
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-2xl flex items-center justify-center transition-all duration-300 ease-out shadow-sm border-4 border-white"
        style={{
          backgroundColor: isHovered ? platform.hoverBg : "#F9F9F9",
          transform: isHovered
            ? "rotate(-10deg) translateY(-40px) translateX(-10px)"
            : "rotate(0deg) translateY(0px) translateX(0px)",
          boxShadow: isHovered
            ? "0 8px 24px rgba(0,0,0,0.12)"
            : "0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div className="w-[80px] h-[80px] ipad-vertical:w-[110px] ipad-vertical:h-[110px] lg:w-[143.71px] lg:h-[143.71px] rounded-full flex items-center justify-center transition-colors duration-300 relative">
          <Image
            src={platform.icon}
            alt={platform.name}
            fill
            className="object-cover transition-all duration-300"
            style={{
              filter: getHoverFilter(),
            }}
          />
        </div>
      </a>

      {/* Custom Cursor Label */}
      {isHovered && (
        <div
          className="pointer-events-none absolute z-50 px-3 py-1.5 rounded-full text-xs font-medium font-poppins text-white whitespace-nowrap"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: "translate(-50%, -130%)",
            backgroundColor: platform.hoverColor,
          }}
        >
          {platform.name}
        </div>
      )}
    </div>
  );
};

export default SocialIconCard;
