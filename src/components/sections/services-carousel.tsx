"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const services = [
{
  title: "Network",
  description: "Pre-screened partners with proven track records",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/affiliate-network-connections%2c-glowing-c8d92b94-20251014165832.jpg",
  color: "#6B7C4A",
  href: "/services/affiliate-management"
},
{
  title: "Media",
  description: "Expert campaign management and optimization",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/media-buying-advertising-platforms%2c-vi-454e4ff7-20251014165847.jpg",
  color: "#0047FF",
  href: "/services/media-buying"
},
{
  title: "Offers",
  description: "High-converting campaigns in crypto, forex & DeFi",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/cryptocurrency-cpa-campaigns-visualizati-15560793-20251014165822.jpg",
  color: "#B5663D",
  href: "/services/cpa-campaigns"
},
{
  title: "Analytics",
  description: "Track performance with advanced reporting tools",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/832c9922-9a59-4cd0-b307-ceca8115c4e1/generated_images/campaign-optimization-analytics%2c-periw-f68b8b63-20251014165838.jpg",
  color: "#6B7BC4",
  href: "/services/campaign-optimization"
}];


export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartXRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  const totalItems = services.length;

  // Responsive radius based on screen size
  const getRadius = () => {
    if (typeof window === 'undefined') return 420;
    const width = window.innerWidth;
    if (width < 640) return 196; // Mobile (280 * 0.7)
    if (width < 1024) return 315; // Tablet (450 * 0.7)
    return 420; // Desktop (600 * 0.7)
  };

  const [radius, setRadius] = useState(getRadius());
  const theta = 360 / totalItems;

  useEffect(() => {
    const handleResize = () => {
      setRadius(getRadius());
      setIsMobile(window.innerWidth < 640);
      rotateCarousel(currentIndex);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

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
      const normalizedAngle = (adjustedAngle % 360 + 360) % 360;
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
  }, [currentIndex, radius]);

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
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#FFFEF9] overflow-hidden !w-full !h-[1105px]">
      <div
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[100vh] flex items-center justify-center px-4 sm:px-6"
        style={{
          perspective: isMobile ? "800px" : "1200px"
        }}>

        <div
          ref={carouselRef}
          className="relative w-full max-w-[224px] h-[168px] sm:max-w-[266px] sm:h-[196px] md:max-w-[308px] md:h-[210px] lg:max-w-[336px] lg:h-[224px] transition-transform duration-1000 ease-in-out"
          style={{ transformStyle: "preserve-3d" }}
          onMouseEnter={stopAutoRotate}
          onMouseLeave={startAutoRotate}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>

          {services.map((service, index) =>
          <div
            key={service.title}
            ref={(el) => itemsRef.current[index] = el}
            className="absolute left-0 top-0 w-full max-w-[224px] h-[168px] sm:max-w-[266px] sm:h-[196px] md:max-w-[308px] md:h-[210px] lg:max-w-[336px] lg:h-[224px] rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] overflow-hidden transition-all duration-[600ms] ease-in-out cursor-pointer">

              <div
              className="w-full h-full p-6 sm:p-8 md:p-9 lg:p-10 flex flex-col justify-between relative text-white transition-transform duration-300 hover:scale-[1.02]"
              style={{ backgroundColor: service.color }}>

                <div className="absolute top-0 right-0 w-[126px] h-[126px] sm:w-[154px] sm:h-[154px] md:w-[175px] md:h-[175px] lg:w-[196px] lg:h-[196px] rounded-bl-full rounded-tr-[20px] sm:rounded-tr-[24px] md:rounded-tr-[28px] lg:rounded-tr-[32px] overflow-hidden">
                  <Image
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  fill
                  className="transition-all duration-700 ease-out hover:brightness-110 object-cover"
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, (max-width: 1024px) 250px, 280px"
                  src={service.image} />

                  <div
                  className="absolute inset-0 mix-blend-color pointer-events-none"
                  style={{ backgroundColor: service.color }} />

                </div>
                <div className="relative z-10 w-full sm:w-3/5 md:w-3/5">
                  <h4 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-semibold leading-tight mb-1 sm:mb-2">
                    {service.title}
                  </h4>
                  <p className="text-xs sm:text-sm opacity-80">{service.description}</p>
                </div>
                <Link
                href={service.href}
                className="relative z-10 flex items-center justify-between cursor-pointer group">

                  <span className="text-sm sm:text-base md:text-lg" style={{ color: service.color }}>Learn More</span>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <svg width="12" height="12" viewBox="0 0 15 14" fill="none" className="sm:w-[14px] sm:h-[13px] md:w-[15px] md:h-[14px]">
                      <path
                      d="M1.38672 12.5L13.6133 1.5M13.6133 1.5V11.1M13.6133 1.5H3.01328"
                      stroke="white"
                      strokeWidth="2" />

                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-4 md:gap-5 z-50">
        <button
          onClick={prev}
          className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[50px] md:h-[50px] rounded-full bg-white/20 backdrop-blur-[10px] border-2 border-white/30 text-white text-xl sm:text-2xl cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 flex items-center justify-center"
          aria-label="Previous service">

          ‹
        </button>
        <button
          onClick={next}
          className="w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[50px] md:h-[50px] rounded-full bg-white/20 backdrop-blur-[10px] border-2 border-white/30 text-white text-xl sm:text-2xl cursor-pointer transition-all duration-300 hover:bg-white/30 hover:scale-110 flex items-center justify-center"
          aria-label="Next service">

          ›
        </button>
      </div>
    </section>);

}