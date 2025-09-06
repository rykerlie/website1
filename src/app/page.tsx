import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import CoreCapabilitiesSection from '@/components/CoreCapabilitiesSection';
import GoldenThreadSection from '@/components/GoldenThreadSection';
import FeatureBreakdownSection from '@/components/FeatureBreakdownSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SocialProofSection />
      <CoreCapabilitiesSection />
      <GoldenThreadSection />
      <FeatureBreakdownSection />
      <AboutSection />
      </main>
  );
}