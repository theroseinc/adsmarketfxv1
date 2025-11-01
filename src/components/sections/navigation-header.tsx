"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

function TypingText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Typing speed: 100ms per character

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-medium leading-tight">
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}

export default function NavigationHeader() {
  return (
    <header className="sticky top-0 z-50 p-2.5 md:p-4">
      <div className="container relative flex h-20 items-center justify-between rounded-full bg-hero-background px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 lg:gap-4 group transition-transform active:scale-95">
          <div className="relative h-12 w-12 lg:h-16 lg:w-16 flex items-center justify-center flex-shrink-0">
            <Image
              alt="AdsMarket FX Logo"
              width={80}
              height={80}
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/photo_2025-02-22_06-44-15-2-1760616885888.jpg"
              className="rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
            />
          </div>
          <div className="flex flex-col min-w-0 justify-center">
            <span className="text-base sm:text-xl lg:text-2xl font-semibold text-foreground tracking-tight truncate leading-tight">
              AdsMarket FX
            </span>
            <TypingText text="INNOVATIVE FINANCE, INTELLIGENT MARKETING" />
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://www.instagram.com/adsmarketfx" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-black transition-all hover:bg-black/5 active:scale-90">
              <Instagram className="h-5 w-5 text-black" />
            </a>
            <a href="https://www.facebook.com/adsmarketfx" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-black transition-all hover:bg-black/5 active:scale-90">
              <Facebook className="h-5 w-5 text-black" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}