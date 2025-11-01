"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Briefcase, Users, Handshake, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/about", label: "About", icon: Users },
  { href: "/partners", label: "Partners", icon: Handshake },
  { href: "/contact", label: "Contact", icon: MessageCircle },
];

export default function BottomNavigation() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show navigation when scrolled down more than 100px
      setIsVisible(scrollPosition > 100);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Check initial position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[90%] max-w-xl transition-all duration-300 ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
    }`}>
      <div className="bg-card/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg border border-border">
        <div className="flex items-center justify-around px-1 py-1.5 sm:px-2 sm:py-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const isHovered = hoveredIndex === index;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative flex flex-col items-center justify-center group min-w-0 transition-transform active:scale-90"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative">
                  {/* Gradient background for active item */}
                  {isActive && (
                    <div className="absolute -inset-1.5 sm:-inset-2 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg sm:rounded-xl" />
                  )}

                  {/* Icon container */}
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "bg-transparent text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                    }`}
                    tabIndex={0}
                  >
                    <Icon
                      className="w-4 h-4 sm:w-4.5 sm:h-4.5"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Label - hidden on small screens, shown on hover/active on larger */}
                <span className={`text-[9px] sm:text-[10px] mt-0.5 font-medium transition-all duration-200 text-center leading-tight ${
                  isActive 
                    ? 'text-primary opacity-100' 
                    : isHovered
                    ? 'text-foreground opacity-100'
                    : 'text-muted-foreground opacity-0 sm:opacity-70'
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}