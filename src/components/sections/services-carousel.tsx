"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    title: "Vetted Affiliate Network",
    description: "Pre-screened partners with proven track records",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/affiliate-network-connections%2c-glowing-c8d92b94-20251014165832.jpg",
    color: "#6B7C4A",
    href: "/services/affiliate-management",
  },
  {
    title: "In-House Media Buying",
    description: "Expert campaign management and optimization",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/media-buying-advertising-platforms%2c-vi-454e4ff7-20251014165847.jpg",
    color: "#0047FF",
    href: "/services/media-buying",
  },
  {
    title: "Premium CPA Offers",
    description: "High-converting campaigns in crypto, forex & DeFi",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/cryptocurrency-cpa-campaigns-visualizati-15560793-20251014165822.jpg",
    color: "#B5663D",
    href: "/services/cpa-campaigns",
  },
  {
    title: "Real-Time Analytics",
    description: "Track performance with advanced reporting tools",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/campaign-optimization-analytics%2c-periw-f68b8b63-20251014165838.jpg",
    color: "#6B7BC4",
    href: "/services/campaign-optimization",
  },
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef(0);

  const totalItems = services.length;
  const radius = 600;
  const theta = 360 / totalItems;

  const rotateCarousel = (index: number) => {
    const angle = theta * index;
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${angle}deg)`;
    }

    itemsRef.current.forEach((item, i) => {
      if (!item) return;

      const itemAngle = theta * i;
      const adjustedAngle = itemAngle - angle;

      item.style.transform = `rotateY(${-itemAngle}deg) translateZ(${radius}px)`;

      // Adjust opacity and scale based on position
      const normalizedAngle = ((adjustedAngle % 360) + 360) % 360;
      let opacity = 1;
      let scale = 1;

      if (normalizedAngle > 90 && normalizedAngle < 270) {
        opacity = 0.3;
        scale = 0.8;
      } else if (normalizedAngle !== 0) {
        opacity = 0.7;
        scale = 0.9;
      }

      item.style.opacity = `${opacity}`;
      item.style.pointerEvents = normalizedAngle === 0 ? "auto" : "none";
    });
  };

  const next = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const startAutoRotate = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
    }
    autoRotateRef.current = setInterval(next, 4000);
  };

  const stopAutoRotate = () => {
    if (autoRotateRef.current) {
      clearInterval(autoRotateRef.current);
      autoRotateRef.current = null;
    }
  };

  useEffect(() => {
    rotateCarousel(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    // Initialize carousel
    rotateCarousel(currentIndex);
    startAutoRotate();

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      stopAutoRotate();
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    if (touchStartXRef.current - touchEndX > 50) next();
    if (touchEndX - touchStartXRef.current > 50) prev();
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#FFFEF9] overflow-hidden">
      <div className="relative w-full h-[100vh] flex items-center justify-center" style={{ perspective: "1200px" }}>
        <div
          ref={carouselRef}
          className="relative w-[480px] h-[320px] transition-transform duration-1000 ease-in-out"
          style={{ transformStyle: "preserve-3d" }}
          onMouseEnter={stopAutoRotate}
          onMouseLeave={startAutoRotate}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (itemsRef.current[index] = el)}
              className="absolute left-0 top-0 w-[480px] h-[320px] rounded-[32px] overflow-hidden transition-all duration-[600ms] ease-in-out cursor-pointer"
            >
              <div
                className="w-full h-full p-10 flex flex-col justify-between relative text-white transition-transform duration-300 hover:scale-[1.02]"
                style={{ backgroundColor: service.color }}
              >
                <div className="absolute top-0 right-0 w-[280px] h-[280px] rounded-bl-full rounded-tr-[32px] overflow-hidden">
                  <Image
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    fill
                    className="transition-all duration-700 ease-out hover:brightness-110 object-cover"
                    sizes="280px"
                    src={service.image}
                  />
                  <div
                    className="absolute inset-0 mix-blend-color pointer-events-none"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
                <div className="relative z-10 w-3/5">
                  <h4 className="text-[32px] font-semibold leading-tight mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm opacity-80">{service.description}</p>
                </div>
                <Link
                  href={service.href}
                  className="relative z-10 flex items-center justify-between cursor-pointer group"
                >
                  <span className="text-lg">Learn More</span>
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path
                        d="M1.38672 12.5L13.6133 1.5M13.6133 1.5V11.1M13.6133 1.5H3.01328"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5 z-50">
        <button
          onClick={prev}
          className="w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-[10px] border-2 border-white/30 text-white text-2xl cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 flex items-center justify-center"
          aria-label="Previous service"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="w-[50px] h-[50px] rounded-full bg-white/20 backdrop-blur-[10px] border-2 border-white/30 text-white text-2xl cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 flex items-center justify-center"
          aria-label="Next service"
        >
          ›
        </button>
      </div>
    </section>
  );
}