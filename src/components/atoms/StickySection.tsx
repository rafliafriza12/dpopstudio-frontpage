"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface StickySectionProps {
  children: ReactNode;
  zIndex: number;
  className?: string;
}

export function StickySection({
  children,
  zIndex,
  className = "",
}: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [topValue, setTopValue] = useState(0);

  useEffect(() => {
    const calculateTop = () => {
      if (sectionRef.current) {
        const windowHeight = window.innerHeight;
        const elementHeight = sectionRef.current.offsetHeight;

        // Jika tinggi element lebih dari layar, maka `top` adalah minus dari selisihnya
        if (elementHeight > windowHeight) {
          setTopValue(windowHeight - elementHeight);
        } else {
          setTopValue(0);
        }
      }
    };

    // Kalkulasi setidaknya sekali saat dimuat
    calculateTop();

    // Kalkulasi ulang saat ukuran layar berubah
    window.addEventListener("resize", calculateTop);

    // Gunakan ResizeObserver untuk menangkap perubahan tinggi elemen secara dinamis (seperti gambar load)
    const observer = new ResizeObserver(() => calculateTop());
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", calculateTop);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`sticky w-full ${className}`}
      style={{ top: topValue, zIndex }}
    >
      {children}
    </div>
  );
}
