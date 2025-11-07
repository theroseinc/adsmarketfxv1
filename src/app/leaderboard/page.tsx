import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import BottomNavigation from "@/components/sections/bottom-navigation";
import LeaderboardSection from "@/components/sections/leaderboard-section";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main>
        <LeaderboardSection />
      </main>
      <Footer />
      <BottomNavigation />
    </div>
  );
}
