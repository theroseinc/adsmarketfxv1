"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const principlesData = [
{
  title: "Traffic",
  heading: "Dual-Traffic Ecosystem",
  description: "Where elite affiliates meet battle-tested media buyers. We've cracked the code on blending organic partnerships with laser-focused paid acquisition. The result? Traffic that converts at scale while maintaining pristine quality standards your brand deserves.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/explosive-3d-abstract-visualization-of-d-8ded53e7-20251028055744.jpg",
  imageAlt: "Explosive 3D abstract visualization of dual traffic ecosystem with holographic data streams",
  color: "#B76E4E"
},
{
  title: "Performance",
  heading: "Data-Driven Performance",
  description: "Algorithms that think faster than markets move. Our AI-powered optimization engine dissects every click, scroll, and conversion in real-time—automatically shifting budgets to winning campaigns while killing underperformers before they drain your ROI.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/mind-bending-data-visualization-showing--67705e7a-20251028055742.jpg",
  imageAlt: "Mind-bending data visualization with AI neural networks and performance metrics",
  color: "#0046CC"
},
{
  title: "Empowerment",
  heading: "Empowering Affiliates & Advertisers",
  description: "We don't just pay you—we arm you with weapons. Exclusive offers, white-glove support, and payouts that actually arrive on time. Join a network where top performers get VIP treatment, custom funnels, and the kind of intel that separates six-figure months from seven-figure years.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/stunning-abstract-representation-of-part-e437a0f4-20251028055745.jpg",
  imageAlt: "Stunning abstract partnership network with golden geometric nodes",
  color: "#00594D"
},
{
  title: "Scale",
  heading: "Premium Traffic at Scale",
  description: "Flood your funnels with traffic that actually clicks Buy. We tap tier-1 GEOs across native, display, push, and pop—delivering millions of qualified eyeballs daily. Every visitor pre-filtered through military-grade fraud detection. Quality meets volume. Finally.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/epic-global-traffic-network-visualizatio-577e9d21-20251028055747.jpg",
  imageAlt: "Epic global traffic network at massive scale with Earth hologram",
  color: "#6B7856"
}];

const PrinciplesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const currentFeature = principlesData[activeTab];
  const nextFeature = principlesData[(activeTab + 1) % principlesData.length];

  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          {/* Toggle Switch */}
          <div className="inline-block relative">
            <input
              type="checkbox"
              id="feature-toggle"
              checked={flipped}
              onChange={() => setFlipped(!flipped)}
              className="absolute left-[-9999px]"
            />
            <label
              htmlFor="feature-toggle"
              className="relative block w-[220px] sm:w-[260px] h-[40px] sm:h-[44px] rounded cursor-pointer font-semibold uppercase text-xs sm:text-sm tracking-wider leading-[40px] sm:leading-[44px] px-4 sm:px-6 text-left text-white overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#102770] z-[-2]" />
              <span
                className="absolute top-[2px] left-[2px] w-[108px] sm:w-[128px] h-[36px] sm:h-[40px] bg-[#ffeba7] rounded-sm z-[-1] transition-all duration-300"
                style={{ left: flipped ? 'calc(100% - 110px)' : '2px' }}
              />
            </label>
          </div>
        </div>

        {/* 3D Card Container */}
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-[340px] sm:max-w-[440px] md:max-w-[540px] lg:max-w-[640px] h-[460px] sm:h-[500px] md:h-[540px] lg:h-[580px]"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d'
            }}
          >
            <div
              className="w-full h-full absolute top-0 left-0 transition-transform duration-700 ease-out"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                transitionDelay: '100ms'
              }}
            >
              {/* Front Card */}
              <div
                className="absolute w-full h-full bg-white rounded-lg shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="relative pt-32 sm:pt-36 md:pt-40 px-6 sm:px-8 text-center h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <h4
                    className="relative font-bold text-xl sm:text-2xl md:text-3xl tracking-wide mb-6 sm:mb-8 text-[#102770]"
                    style={{
                      transform: 'translate3d(0, 0, 35px) perspective(100px)'
                    }}
                  >
                    <span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] z-[-1] shadow-lg animate-blob"
                      style={{
                        background: 'linear-gradient(217deg, #448ad5, #b8eaf9)',
                        borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%'
                      }}
                    />
                    {currentFeature.heading}
                  </h4>

                  <p
                    className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-[#102770] leading-relaxed px-2 sm:px-4"
                    style={{
                      transform: 'translate3d(0, 0, 30px) perspective(100px)'
                    }}
                  >
                    {currentFeature.description.slice(0, 180)}...
                  </p>

                  <Link
                    href="/our-principles"
                    className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-[#102770] text-[#ffeba7] rounded font-medium text-sm hover:bg-[#ffeba7] hover:text-[#102770] transition-all duration-200"
                    style={{
                      transform: 'translate3d(0, 0, 30px) perspective(100px)'
                    }}
                  >
                    Learn More
                  </Link>

                  {/* Decorative Image - Front */}
                  <div
                    className="absolute left-0 top-0 w-full rounded-t-lg overflow-hidden z-[1]"
                    style={{
                      transform: 'translate3d(0, 0, 15px) perspective(100px)'
                    }}
                  >
                    <div className="relative h-20 sm:h-24">
                      <Image 
                        src={currentFeature.image} 
                        alt={currentFeature.imageAlt}
                        fill
                        className="object-cover opacity-30"
                        style={{ filter: `hue-rotate(${activeTab * 30}deg)` }}
                      />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${currentFeature.color}40, ${currentFeature.color}20)` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Card */}
              <div
                className="absolute w-full h-full bg-white rounded-lg shadow-2xl"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)'
                }}
              >
                <div className="relative pt-32 sm:pt-36 md:pt-40 px-6 sm:px-8 text-center h-full" style={{ transformStyle: 'preserve-3d' }}>
                  <h4
                    className="relative font-bold text-xl sm:text-2xl md:text-3xl tracking-wide mb-6 sm:mb-8 text-[#0c1c00]"
                    style={{
                      transform: 'translate3d(0, 0, 35px) perspective(100px)'
                    }}
                  >
                    <span
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] z-[-1] shadow-lg animate-blob"
                      style={{
                        background: 'linear-gradient(217deg, #648946, #a3c984)',
                        borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%'
                      }}
                    />
                    {nextFeature.heading}
                  </h4>

                  <p
                    className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-[#0c1c00] leading-relaxed px-2 sm:px-4"
                    style={{
                      transform: 'translate3d(0, 0, 30px) perspective(100px)'
                    }}
                  >
                    {nextFeature.description.slice(0, 180)}...
                  </p>

                  <Link
                    href="/our-principles"
                    className="inline-block px-5 sm:px-6 py-2 sm:py-2.5 bg-[#0c1c00] text-[#ffeba7] rounded font-medium text-sm hover:bg-[#ffeba7] hover:text-[#0c1c00] transition-all duration-200"
                    style={{
                      transform: 'translate3d(0, 0, 30px) perspective(100px)'
                    }}
                  >
                    Learn More
                  </Link>

                  <div
                    className="absolute left-0 top-0 w-full rounded-t-lg overflow-hidden z-[1]"
                    style={{
                      transform: 'translate3d(0, 0, 15px) perspective(100px)'
                    }}
                  >
                    <div className="relative h-20 sm:h-24">
                      <Image 
                        src={nextFeature.image} 
                        alt={nextFeature.imageAlt}
                        fill
                        className="object-cover opacity-30"
                        style={{ filter: `hue-rotate(${((activeTab + 1) % principlesData.length) * 30}deg)` }}
                      />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${nextFeature.color}40, ${nextFeature.color}20)` }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons Below */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-12 sm:mt-14 md:mt-16 max-w-3xl mx-auto">
          <Link
            href="/our-principles"
            className="relative bg-gradient-to-r from-[var(--color-secondary-text)] to-[var(--color-charcoal)] text-[var(--color-pure-white)] rounded-[16px] px-8 sm:px-9 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-[19px] md:text-[20px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl text-center group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Our Foundation
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-[var(--color-secondary-text)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="/leaderboard"
            className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#0052FF] text-[var(--color-pure-white)] rounded-[16px] px-8 sm:px-9 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-[19px] md:text-[20px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl text-center group overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Leaderboard
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#001A66] to-[var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
            14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
            28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
            42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
            56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
            70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
            84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
          }
          .animate-blob {
            animation: blob 6s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PrinciplesSection;