'use client';

import WaitlistForm from '@/components/WaitlistForm';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation Placeholder - will be enhanced later */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[var(--bg-primary)] to-[#0A0A0F]">
        {/* Subtle animated orb - placeholder for complex animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--cta-vibrant)] rounded-full opacity-10 blur-3xl animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 text-center max-w-4xl">
        {/* Hero Headline */}
        <h1 className="h1 mb-8 max-w-3xl mx-auto">
          Stop managing your tools. Start directing your work.
        </h1>

        {/* Sub-headline */}
        <p className="body-text text-xl mb-12 max-w-2xl mx-auto">
          Aura is the proactive AI partner that executes your intent across every application.
        </p>

        {/* CTA Form */}
        <div className="flex justify-center">
          <WaitlistForm size="lg" className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
}
