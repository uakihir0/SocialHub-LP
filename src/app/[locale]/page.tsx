import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PlatformsSection } from '@/components/sections/PlatformsSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LanguageSwitcher />
      <HeroSection />
      <FeaturesSection />
      <PlatformsSection />
      <ScreenshotsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
