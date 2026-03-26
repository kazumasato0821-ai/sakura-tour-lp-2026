/**
 * 春の桜と着物・呈茶を楽しむ体験ツアー LP
 * Design: 花霞（はながすみ）— 日本画的な霞の美学
 * Colors: 桜色基調、薄墨テキスト、若草アクセント
 * Typography: Noto Serif JP (見出し) × Noto Sans JP (本文)
 */

import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import GallerySection from "@/components/GallerySection";
import OverviewSection from "@/components/OverviewSection";
import ScheduleSection from "@/components/ScheduleSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import SakuraPetals from "@/components/SakuraPetals";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <SakuraPetals />
      <Navigation />
      <HeroSection />
      <IntroSection />
      <OverviewSection />
      <ScheduleSection />
      <GallerySection />
      <CtaSection />
      <Footer />
    </div>
  );
}
