"use client";

import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Users, Target, Zap, Award, Globe, BarChart3, Rocket, Heart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  
  const values = [
    {
      icon: Shield,
      title: "Exclusivity",
      description: "Invite-only network ensuring only the highest quality affiliates and advertisers join our ecosystem.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Performance-Driven",
      description: "Every partnership is measured by results. We optimize relentlessly to maximize ROI and conversions.",
      color: "teal-accent"
    },
    {
      icon: Zap,
      title: "Transparency",
      description: "Real-time analytics, clear communication, and honest reporting. No hidden fees or surprises.",
      color: "forest-green"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      <main className="overflow-hidden">
        {/* Hero Section - Overlapping Design */}
        <section className="container mx-auto px-6 md:px-10 pt-12 pb-32 md:pt-16 md:pb-40 relative">
          <div className="max-w-7xl mx-auto">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-accent/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-teal-accent/10 rounded-full border border-primary/20">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    About AdsMarket FX
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-medium leading-tight">
                  Redefining Performance in{" "}
                  <span className="text-primary">DeFi</span> &{" "}
                  <span className="text-teal-accent">Forex</span>
                </h1>
                
                <p className="text-xl text-secondary-text leading-relaxed">
                  ADSMARKETFX is more than just a network; it's a curated financial ecosystem built on exclusivity, performance, and transparent partnership.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link href="/affiliates">
                    <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-full text-lg group">
                      Join as Affiliate
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/advertisers">
                    <Button variant="outline" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold py-6 px-8 rounded-full text-lg">
                      Partner as Advertiser
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right Stats Cards - Overlapping */}
              <div className="relative h-[500px] hidden lg:block">
                {/* Card 1 */}
                <div className="absolute top-0 right-0 w-72 bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 bg-white/20 rounded-full mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <div className="text-5xl font-bold mb-2">500+</div>
                  <div className="text-white/90">Elite Affiliates in Our Network</div>
                </div>
                
                {/* Card 2 */}
                <div className="absolute top-32 left-0 w-72 bg-gradient-to-br from-teal-accent to-forest-green rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 bg-white/20 rounded-full mb-4">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <div className="text-5xl font-bold mb-2">$50M+</div>
                  <div className="text-white/90">Revenue Generated for Partners</div>
                </div>
                
                {/* Card 3 */}
                <div className="absolute bottom-0 right-8 w-72 bg-gradient-to-br from-terracotta to-olive-green rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center h-16 w-16 bg-white/20 rounded-full mb-4">
                    <Rocket className="h-8 w-8" />
                  </div>
                  <div className="text-5xl font-bold mb-2">150+</div>
                  <div className="text-white/90">Premium Brands Trust Us</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement - Full Width Accent */}
        <section className="bg-gradient-to-br from-charcoal via-charcoal to-primary/20 text-white py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-10 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                We bridge the gap between leading brands and elite marketing talent
              </h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Through selective onboarding, we guarantee premium-quality traffic and maximum ROI, ensuring your brand achieves scalable, performance-driven growth in the most competitive markets.
              </p>
            </div>
          </div>
        </section>

        {/* Hybrid Model - Interactive Cards */}
        <section className="container mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-5 py-2 bg-teal-accent/10 rounded-full">
                <span className="text-sm font-semibold text-teal-accent uppercase tracking-wider">
                  Our Approach
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                A Hybrid Model for Unmatched Growth
              </h2>
              <p className="text-xl text-secondary-text max-w-3xl mx-auto">
                Choose between affiliate traffic, in-house media execution, or a powerful combination of both
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Affiliate Card */}
              <div className="group relative bg-gradient-to-br from-primary/5 to-teal-accent/5 rounded-[32px] p-8 md:p-10 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Users className="h-32 w-32 text-primary" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-20 w-20 bg-gradient-to-br from-primary to-teal-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                    Affiliate-Driven Performance
                  </h3>
                  
                  <p className="text-lg text-secondary-text leading-relaxed mb-6">
                    A private network of elite publishers promoting offers across high-converting channels. Every affiliate is hand-picked and vetted to ensure brand safety and premium traffic quality.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-secondary-text">Hand-picked elite publishers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-secondary-text">Premium traffic quality guaranteed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-secondary-text">Complete brand safety assurance</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Media Buying Card */}
              <div className="group relative bg-gradient-to-br from-terracotta/5 to-olive-green/5 rounded-[32px] p-8 md:p-10 border-2 border-terracotta/10 hover:border-terracotta/30 transition-all duration-300 hover:shadow-2xl">
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target className="h-32 w-32 text-terracotta" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center h-20 w-20 bg-gradient-to-br from-terracotta to-olive-green rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                    In-House Media Buying
                  </h3>
                  
                  <p className="text-lg text-secondary-text leading-relaxed mb-6">
                    A dedicated team of expert media buyers managing campaigns from the ground up. We handle strategy, execution, and optimization to deliver scalable, performance-driven growth.
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-terracotta/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-terracotta" />
                      </div>
                      <span className="text-secondary-text">Expert media buying team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-terracotta/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-terracotta" />
                      </div>
                      <span className="text-secondary-text">End-to-end campaign management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-terracotta/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <ArrowRight className="h-3 w-3 text-terracotta" />
                      </div>
                      <span className="text-secondary-text">Continuous optimization for ROI</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values - Interactive Tabs */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <div className="inline-block px-5 py-2 bg-forest-green/10 rounded-full">
                  <span className="text-sm font-semibold text-forest-green uppercase tracking-wider">
                    Our Values
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                  What Sets Us Apart
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  const isActive = activeValue === index;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveValue(index)}
                      className={`text-left bg-card rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                        isActive 
                          ? "border-primary shadow-lg scale-105" 
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <div className={`flex items-center justify-center h-16 w-16 rounded-2xl mb-6 transition-all ${
                        isActive 
                          ? "bg-primary text-white scale-110" 
                          : "bg-primary/10 text-primary"
                      }`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="container mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-5 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Leadership Team
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                Meet Our Leaders
              </h2>
              <p className="text-xl text-secondary-text max-w-3xl mx-auto">
                Experienced professionals driving innovation in performance marketing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* CEO & Owner */}
              <div className="group relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-primary/5 to-teal-accent/5">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ed5e5658-fe5c-4063-91df-3fb6b9391c78/generated_images/professional-business-headshot-portrait--c35250ea-20251111024622.jpg"
                    alt="Chag Achim - CEO & Owner"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">Chag Achim</h3>
                  <p className="text-primary font-medium text-lg">CEO & Owner</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Visionary leader with 15+ years in performance marketing and fintech innovation
                  </p>
                </div>
              </div>

              {/* CMO */}
              <div className="group relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-teal-accent/5 to-forest-green/5">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ed5e5658-fe5c-4063-91df-3fb6b9391c78/generated_images/professional-business-headshot-portrait--134a7749-20251111024624.jpg"
                    alt="Isaac - Chief Marketing Officer"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">Isaac</h3>
                  <p className="text-teal-accent font-medium text-lg">Chief Marketing Officer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Strategic marketing expert specializing in growth and brand positioning
                  </p>
                </div>
              </div>

              {/* CTO */}
              <div className="group relative">
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-terracotta/5 to-olive-green/5">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/ed5e5658-fe5c-4063-91df-3fb6b9391c78/generated_images/professional-business-headshot-portrait--54faff9a-20251111024622.jpg"
                    alt="Ethan Cole - Chief Technology Officer"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-terracotta/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl md:text-3xl font-semibold">Ethan Cole</h3>
                  <p className="text-terracotta font-medium text-lg">Chief Technology Officer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Technology innovator building scalable solutions for performance marketing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="container mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-primary via-primary to-teal-accent rounded-[48px] p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center h-20 w-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <Heart className="h-10 w-10" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-medium mb-4">
                    Trusted by Industry Leaders
                  </h2>
                  <p className="text-xl text-white/90">
                    Join the elite network that delivers results
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                    <div className="text-white/80 uppercase tracking-wide text-sm">Elite Affiliates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold mb-2">$50M+</div>
                    <div className="text-white/80 uppercase tracking-wide text-sm">Revenue Generated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold mb-2">150+</div>
                    <div className="text-white/80 uppercase tracking-wide text-sm">Premium Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-bold mb-2">24/7</div>
                    <div className="text-white/80 uppercase tracking-wide text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center justify-center h-24 w-24 bg-gradient-to-br from-primary to-teal-accent rounded-full mb-4">
              <Award className="h-12 w-12 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-medium leading-tight">
              Join an Elite Circle
            </h2>
            
            <p className="text-xl md:text-2xl text-secondary-text max-w-3xl mx-auto">
              Our network is invite-only to maintain the highest standards. Select your partnership type below to begin the application process.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link href="/affiliates">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-7 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
                  Apply as Affiliate
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/advertisers">
                <Button className="bg-charcoal hover:bg-charcoal/90 text-white font-semibold py-7 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 group">
                  Apply as Advertiser
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNavigation />
    </div>
  );
}