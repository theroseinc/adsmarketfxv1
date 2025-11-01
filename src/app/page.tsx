import NavigationHeader from "@/components/sections/navigation-header";
import HeroSection from "@/components/sections/hero-section";
import MissionStatement from "@/components/sections/mission-statement";
import ServicesCarousel from "@/components/sections/services-carousel";
import PrinciplesSection from "@/components/sections/principles-section";
import CallToActionCards from "@/components/sections/call-to-action-cards";
import FeaturedArticle from "@/components/sections/featured-article";
import CommunityCta from "@/components/sections/community-cta";
import NewsletterSignup from "@/components/sections/newsletter-signup";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <HeroSection />
        <MissionStatement />
        <ServicesCarousel />
        <PrinciplesSection />
        <CallToActionCards />
        <FeaturedArticle />
        <CommunityCta />
        <NewsletterSignup />
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}