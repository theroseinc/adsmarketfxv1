'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) =>
<svg width="24" height="28" viewBox="0 0 24 28" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M12 1V27" />
    <path d="M6 21L12 27L18 21" />
  </svg>;


const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) =>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M1 12H23" />
    <path d="M17 6L23 12L17 18" />
  </svg>;


const HeroSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const slides = [
    {
      stat: '15M+',
      text: 'Monthly Ad Impressions',
      color: '#D4B896',
      bgImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/mesmerizing-15m-impressions-concept-beig-4b61a280-20251028055746.jpg'
    },
    {
      stat: '250+',
      text: 'Active Partners Worldwide',
      color: '#00CCA3',
      bgImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/creative-250-partners-worldwide-visualiz-3139cf36-20251028055745.jpg'
    },
    {
      stat: '98%',
      text: 'Campaign Success Rate',
      color: '#B76E4E',
      bgImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/stunning-98-success-rate-concept-terraco-aa2c1109-20251028055745.jpg'
    },
    {
      stat: '$50M+',
      text: 'Revenue Generated',
      color: '#6B7856',
      bgImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/powerful-50m-revenue-visualization-olive-c8e5593e-20251028055747.jpg'
    },
    {
      stat: '5.8x',
      text: 'Average ROI',
      color: '#0046CC',
      bgImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/epic-5-8x-roi-multiplier-concept-vibrant-e128baff-20251028055741.jpg'
    }
  ];

  return (
    <section className="w-full pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-24 lg:pb-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-4 sm:gap-6">
          
          {/* Left Main Card */}
          <div className="relative w-full aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-[600px] xl:h-[700px] bg-[#DDE6F7] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              autoPlay
              loop
              muted
              playsInline
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/25102868-ded4-44ee-8a28-5abbc53f2b57/generated_videos/professional-cinematic-video-showcasing--a438d61c-20251010103637.mp4" />

            <div className="relative z-10 p-6 sm:p-8 md:p-12 h-full flex flex-col">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-medium leading-tight text-white max-w-xl">
                  Exclusive Performance Marketing Network
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mt-3 sm:mt-4 max-w-lg leading-relaxed">
                  Innovative Finance. Intelligence Marketing. Invite-Only Access.
                </p>
              </div>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Expandable Stats Cards */}
            <div className="w-full">
              <div className="flex gap-2 h-[280px] sm:h-[320px] md:h-[360px]">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                      hoveredCard === null 
                        ? 'flex-1' 
                        : hoveredCard === index 
                        ? 'flex-[3]' 
                        : 'flex-[0.5]'
                    }`}
                    style={{ backgroundColor: slide.color }}
                  >
                    <Image
                      src={slide.bgImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      className="object-cover opacity-50"
                    />
                    <div className={`absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 transition-all duration-700 overflow-hidden ${
                      hoveredCard === index ? 'opacity-100' : hoveredCard === null ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <span className={`font-medium text-white drop-shadow-lg transition-all duration-700 ${
                        hoveredCard === index 
                          ? 'text-[56px] sm:text-[64px] md:text-[72px]' 
                          : 'text-[40px] sm:text-[48px] md:text-[56px]'
                      }`}>
                        {slide.stat}
                      </span>
                      <p className={`text-white text-center leading-tight drop-shadow-md transition-all duration-700 px-2 ${
                        hoveredCard === index 
                          ? 'text-sm sm:text-base md:text-lg mt-2 sm:mt-3 opacity-100 max-w-[180px] sm:max-w-[200px]' 
                          : 'text-xs sm:text-sm mt-1 sm:mt-2 opacity-80 max-w-[120px] sm:max-w-[140px]'
                      }`}>
                        {slide.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Access Card */}
            <Link href="/contact" className="block group">
              <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[240px] xl:h-[280px] bg-gradient-to-br from-[#001A66] to-[#0046CC] rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-5 sm:p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-transform active:scale-[0.98]">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/stunning-marketing-intelligence-dashboar-7690eafc-20251028055745.jpg"
                  alt="Stunning marketing intelligence dashboard with holographic interface"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover opacity-30"
                />
                <div className="relative z-10 max-w-[85%]">
                  <h5 className="text-xl sm:text-2xl font-medium text-pure-white leading-tight">Marketing Intelligence</h5>
                  <p className="text-white/80 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">Exclusive insights, case studies, and industry reports</p>
                </div>
                <div className="relative z-10 self-end">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-active:scale-95">
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Marketing Intelligence Card */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-auto lg:h-[240px] xl:h-[280px] bg-gradient-to-br from-[#00594D] to-[#00CCA3] rounded-[20px] sm:rounded-[24px] md:rounded-[32px] p-5 sm:p-6 md:p-8 overflow-hidden flex flex-col justify-between">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/epic-network-connections-visualization-e-ac7f8ae6-20251028055746.jpg"
                alt="Epic network connections with interconnected nodes"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                className="object-cover opacity-40"
              />
              <div className="relative z-10 max-w-[85%]">
                <h5 className="text-lg sm:text-xl font-medium text-white leading-tight">
                  Join Our Network
                </h5>
                <p className="text-white/90 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-2">
                  Exclusive invite for advertisers and publishers to register
                </p>
              </div>
              <Link href="/resources" aria-label="View Resources" className="relative z-10 self-end group">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-active:scale-95">
                  <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;