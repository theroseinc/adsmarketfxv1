"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const principlesData = [
{
  title: "Traffic",
  heading: "Dual-Traffic Ecosystem",
  description: "Where elite affiliates meet battle-tested media buyers. We've cracked the code on blending organic partnerships with laser-focused paid acquisition. The result? Traffic that converts at scale while maintaining pristine quality standards your brand deserves.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/explosive-3d-abstract-visualization-of-d-8ded53e7-20251028055744.jpg",
  imageAlt: "Explosive 3D abstract visualization of dual traffic ecosystem with holographic data streams",
  color: "#B76E4E" // Terracotta
},
{
  title: "Performance",
  heading: "Data-Driven Performance",
  description: "Algorithms that think faster than markets move. Our AI-powered optimization engine dissects every click, scroll, and conversion in real-time—automatically shifting budgets to winning campaigns while killing underperformers before they drain your ROI.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/mind-bending-data-visualization-showing--67705e7a-20251028055742.jpg",
  imageAlt: "Mind-bending data visualization with AI neural networks and performance metrics",
  color: "#0046CC" // Primary Blue
},
{
  title: "Empowerment",
  heading: "Empowering Affiliates & Advertisers",
  description: "We don't just pay you—we arm you with weapons. Exclusive offers, white-glove support, and payouts that actually arrive on time. Join a network where top performers get VIP treatment, custom funnels, and the kind of intel that separates six-figure months from seven-figure years.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/stunning-abstract-representation-of-part-e437a0f4-20251028055745.jpg",
  imageAlt: "Stunning abstract partnership network with golden geometric nodes",
  color: "#00594D" // Forest Green
},
{
  title: "Scale",
  heading: "Premium Traffic at Scale",
  description: "Flood your funnels with traffic that actually clicks Buy. We tap tier-1 GEOs across native, display, push, and pop—delivering millions of qualified eyeballs daily. Every visitor pre-filtered through military-grade fraud detection. Quality meets volume. Finally.",
  image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/03717330-1ca2-4a48-a77e-4f44e386c500/generated_images/epic-global-traffic-network-visualizatio-577e9d21-20251028055747.jpg",
  imageAlt: "Epic global traffic network at massive scale with Earth hologram",
  color: "#6B7856" // Olive Green
}];


const PrinciplesSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const selectedPrinciple = principlesData[selectedIndex];

  const handleBubbleClick = (index: number) => {
    setDirection(index > selectedIndex ? 1 : -1);
    setSelectedIndex(index);
  };

  return (
    <section className="bg-background py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-x-16 items-center">
          <div className="lg:col-span-5 flex flex-col items-start gap-8 sm:gap-10 lg:gap-12">
            <ul className="grid grid-cols-2 gap-3 sm:gap-4 w-full">
              {principlesData.map((item, index) =>
              <li key={index}>
                  <motion.button
                  onClick={() => handleBubbleClick(index)}
                  style={selectedIndex === index ? {
                    backgroundColor: item.color,
                    color: '#FFFFFF'
                  } : {}}
                  className={`
                      w-full text-left px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 
                      text-[18px] sm:text-[20px] md:text-[22px] font-medium 
                      rounded-full transition-all duration-300 
                      ${selectedIndex === index ?
                  'shadow-lg scale-105' :
                  'bg-[var(--color-pure-white)] text-[var(--color-secondary-text)] hover:bg-[var(--color-secondary)] hover:scale-102 border border-[var(--color-border)]'}
                    `
                  }
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                  whileHover={selectedIndex !== index ? { scale: 1.02 } : {}}
                  animate={selectedIndex === index ? {
                    scale: [1.05, 1.08, 1.05],
                    transition: { duration: 0.3 }
                  } : {}}>

                    {item.title}
                  </motion.button>
                </li>
              )}
            </ul>
            <div className="flex flex-col gap-3 sm:gap-4 w-full">
              <Link
                href="/our-principles"
                className="relative bg-gradient-to-r from-[var(--color-secondary-text)] to-[var(--color-charcoal)] text-[var(--color-pure-white)] rounded-[16px] px-8 sm:px-9 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-[19px] md:text-[20px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl text-center group overflow-hidden">
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
                className="relative bg-gradient-to-r from-[var(--color-primary)] to-[#0052FF] text-[var(--color-pure-white)] rounded-[16px] px-8 sm:px-9 md:px-10 py-4 sm:py-5 md:py-6 text-lg sm:text-[19px] md:text-[20px] font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl text-center group overflow-hidden">
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
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative" style={{ perspective: '1200px' }}>
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={selectedIndex}
                  custom={direction}
                  initial={{
                    rotateY: direction * 90,
                    opacity: 0,
                    x: direction * 50,
                    scale: 0.8
                  }}
                  animate={{
                    rotateY: 0,
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.34, 1.56, 0.64, 1]
                    }
                  }}
                  exit={{
                    rotateY: direction * -90,
                    opacity: 0,
                    x: direction * -50,
                    scale: 0.8,
                    transition: {
                      duration: 0.4,
                      ease: [0.32, 0, 0.67, 0]
                    }
                  }}
                  style={{
                    backgroundColor: selectedPrinciple.color,
                    transformStyle: 'preserve-3d'
                  }}
                  className="relative block p-6 sm:p-8 md:p-10 text-[var(--color-pure-white)] rounded-[20px] sm:rounded-[24px] min-h-[360px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-0 lg:aspect-[3/2] overflow-hidden">

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="font-medium text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-snug mb-4 sm:mb-6">

                        {selectedPrinciple.heading}
                      </motion.h4>
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-[40ch] opacity-95">

                        {selectedPrinciple.description}
                      </motion.p>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 0.8, rotate: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] z-0">

                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={selectedPrinciple.image}
                        alt={selectedPrinciple.imageAlt}
                        width={420}
                        height={420}
                        sizes="(max-width: 640px) 240px, (max-width: 768px) 300px, (max-width: 1024px) 360px, 420px"
                        className="object-cover w-full h-full" />

                      <div
                        className="absolute inset-0 mix-blend-color"
                        style={{ backgroundColor: selectedPrinciple.color }} />

                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Background stacked cards for depth effect */}
              <div className="absolute inset-0 -z-10">
                {principlesData.map((item, index) => {
                  if (index === selectedIndex) return null;
                  const offset = (index - selectedIndex) * 4;
                  const isNext = index === selectedIndex + 1 || selectedIndex === principlesData.length - 1 && index === 0;
                  const isPrev = index === selectedIndex - 1 || selectedIndex === 0 && index === principlesData.length - 1;

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        x: isNext ? 20 : isPrev ? -20 : 0,
                        y: Math.abs(offset) * 3,
                        scale: 1 - Math.abs(offset) * 0.05,
                        opacity: isNext || isPrev ? 0.3 : 0.1,
                        rotateY: isNext ? 10 : isPrev ? -10 : 0
                      }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{
                        backgroundColor: item.color,
                        transformStyle: 'preserve-3d'
                      }}
                      className="absolute inset-0 rounded-[20px] sm:rounded-[24px] pointer-events-none" />);


                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PrinciplesSection;