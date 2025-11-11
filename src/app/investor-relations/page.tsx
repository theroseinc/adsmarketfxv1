"use client";

import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, PieChart, LineChart, Building2, FileText, Users, Target, Briefcase, Calendar, Mail } from "lucide-react";
import Link from "next/link";

export default function InvestorRelationsPage() {
  const financialHighlights = [
    {
      icon: TrendingUp,
      value: "$50M+",
      label: "Annual Revenue",
      change: "+127%",
      color: "primary"
    },
    {
      icon: DollarSign,
      value: "$8.2M",
      label: "EBITDA",
      change: "+95%",
      color: "teal-accent"
    },
    {
      icon: PieChart,
      value: "42%",
      label: "Net Margin",
      change: "+18%",
      color: "forest-green"
    },
    {
      icon: LineChart,
      value: "5.8x",
      label: "Average ROI",
      change: "+32%",
      color: "terracotta"
    }
  ];

  const keyMetrics = [
    { label: "Active Partners", value: "500+", icon: Users },
    { label: "Markets Served", value: "45+", icon: Target },
    { label: "Team Members", value: "120+", icon: Briefcase },
    { label: "Years Operating", value: "7+", icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-10 pt-12 pb-32 md:pt-16 md:pb-40 relative">
          <div className="max-w-7xl mx-auto">
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-green/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="text-center space-y-8 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-forest-green/10 rounded-full border border-primary/20">
                <Building2 className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Investor Relations
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-medium leading-tight">
                Building the Future of{" "}
                <span className="text-primary">Performance Marketing</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-secondary-text leading-relaxed max-w-4xl mx-auto">
                Discover why leading investors trust ADSMARKETFX to deliver exceptional returns in the rapidly growing digital marketing and DeFi sectors.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold py-6 px-8 rounded-full text-lg group">
                  Download Investor Deck
                  <FileText className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button variant="outline" className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold py-6 px-8 rounded-full text-lg">
                  Contact Investor Relations
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Highlights */}
        <section className="container mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-5 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  2024 Performance
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                Financial Highlights
              </h2>
              <p className="text-xl text-secondary-text max-w-3xl mx-auto">
                Consistent growth and profitability across all key metrics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {financialHighlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    
                    <div className="text-4xl md:text-5xl font-bold mb-2">{item.value}</div>
                    <div className="text-muted-foreground mb-3">{item.label}</div>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-forest-green/10 rounded-full">
                      <TrendingUp className="h-4 w-4 text-forest-green" />
                      <span className="text-sm font-semibold text-forest-green">{item.change} YoY</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Investment Opportunity */}
        <section className="bg-gradient-to-br from-charcoal via-charcoal to-primary/20 text-white py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-10 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-medium leading-tight">
                    Strategic Investment Opportunity
                  </h2>
                  <p className="text-xl text-white/80 leading-relaxed">
                    ADSMARKETFX is positioned at the intersection of two explosive growth sectors: performance marketing and decentralized finance. Our proprietary technology platform and exclusive network create sustainable competitive advantages.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Market Leadership</h3>
                        <p className="text-white/70">Dominant position in high-value DeFi and Forex verticals</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <LineChart className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Scalable Revenue Model</h3>
                        <p className="text-white/70">Recurring revenue streams with high margin expansion</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">Proven Growth Trajectory</h3>
                        <p className="text-white/70">127% YoY revenue growth with path to profitability</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm rounded-[32px] p-8 md:p-10 border border-white/10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Key Metrics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {keyMetrics.map((metric, index) => {
                      const Icon = metric.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="flex items-center justify-center h-14 w-14 bg-white/10 rounded-xl mx-auto mb-4">
                            <Icon className="h-7 w-7" />
                          </div>
                          <div className="text-3xl md:text-4xl font-bold mb-1">{metric.value}</div>
                          <div className="text-sm text-white/70">{metric.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Strategy */}
        <section className="container mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-block px-5 py-2 bg-teal-accent/10 rounded-full">
                <span className="text-sm font-semibold text-teal-accent uppercase tracking-wider">
                  Strategic Roadmap
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                Our Path to Market Dominance
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-teal-accent/5 rounded-3xl p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="text-6xl font-bold text-primary/20 mb-4">01</div>
                <h3 className="text-2xl font-semibold mb-4">Geographic Expansion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Expanding operations into emerging markets across Asia-Pacific, LATAM, and MENA regions with localized partnerships and compliance infrastructure.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-forest-green/5 to-teal-accent/5 rounded-3xl p-8 border-2 border-forest-green/20 hover:border-forest-green/40 transition-all duration-300 hover:shadow-xl">
                <div className="text-6xl font-bold text-forest-green/20 mb-4">02</div>
                <h3 className="text-2xl font-semibold mb-4">Technology Platform</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Developing proprietary AI-powered attribution and optimization technology to deliver 10x improvement in campaign performance and fraud detection.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-terracotta/5 to-olive-green/5 rounded-3xl p-8 border-2 border-terracotta/20 hover:border-terracotta/40 transition-all duration-300 hover:shadow-xl">
                <div className="text-6xl font-bold text-terracotta/20 mb-4">03</div>
                <h3 className="text-2xl font-semibold mb-4">Vertical Diversification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Launching new high-margin verticals including NFT gaming, Web3 platforms, and institutional crypto trading to capture $2B+ addressable market.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Reports */}
        <section className="bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
          <div className="container mx-auto px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <div className="inline-block px-5 py-2 bg-primary/10 rounded-full">
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Resources
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-medium leading-tight">
                  Reports & Documents
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center h-16 w-16 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                      <FileText className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">Annual Report 2024</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Comprehensive overview of financial performance, strategic initiatives, and market positioning.
                  </p>
                  <div className="text-sm text-muted-foreground">PDF • 8.2 MB • Updated Jan 2025</div>
                </div>

                <div className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center h-16 w-16 bg-teal-accent/10 rounded-2xl group-hover:bg-teal-accent group-hover:text-white transition-all">
                      <PieChart className="h-8 w-8 text-teal-accent group-hover:text-white" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-teal-accent transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">Q4 2024 Earnings</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Quarterly financial results, key performance indicators, and forward guidance.
                  </p>
                  <div className="text-sm text-muted-foreground">PDF • 3.1 MB • Updated Dec 2024</div>
                </div>

                <div className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center h-16 w-16 bg-forest-green/10 rounded-2xl group-hover:bg-forest-green group-hover:text-white transition-all">
                      <LineChart className="h-8 w-8 text-forest-green group-hover:text-white" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-forest-green transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">Investor Presentation</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Strategic overview, competitive advantages, and investment highlights for potential investors.
                  </p>
                  <div className="text-sm text-muted-foreground">PDF • 12.5 MB • Updated Jan 2025</div>
                </div>

                <div className="bg-card rounded-3xl p-8 border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center justify-center h-16 w-16 bg-terracotta/10 rounded-2xl group-hover:bg-terracotta group-hover:text-white transition-all">
                      <Calendar className="h-8 w-8 text-terracotta group-hover:text-white" />
                    </div>
                    <ArrowRight className="h-6 w-6 text-muted-foreground group-hover:text-terracotta transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">Event Calendar</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Upcoming earnings calls, investor conferences, and industry events.
                  </p>
                  <div className="text-sm text-muted-foreground">Updated Weekly</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact IR Team */}
        <section className="container mx-auto px-6 md:px-10 py-20 md:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-primary via-primary to-teal-accent rounded-[48px] p-12 md:p-16 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 text-center space-y-6">
                <div className="inline-flex items-center justify-center h-20 w-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <Mail className="h-10 w-10" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-medium">
                  Get in Touch with Our IR Team
                </h2>
                
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  For inquiries regarding financial performance, investment opportunities, or partnership discussions, our dedicated investor relations team is here to help.
                </p>
                
                <div className="pt-6 space-y-3">
                  <div className="flex items-center justify-center gap-3 text-lg">
                    <Mail className="h-5 w-5" />
                    <a href="mailto:investors@adsmarketfx.com" className="hover:underline">
                      investors@adsmarketfx.com
                    </a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <Link href="/contact">
                    <Button className="bg-white text-primary hover:bg-white/90 font-semibold py-6 px-10 rounded-full text-lg shadow-xl hover:scale-105 transition-all group">
                      Contact Investor Relations
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BottomNavigation />
    </div>
  );
}
