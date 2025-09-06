'use client';

import { useState } from 'react';

export default function CoreCapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const capabilities = [
    {
      id: 'proactive',
      icon: '🎯',
      title: 'Proactive Guidance',
      description: 'Aura watches for friction and repetition, offering help before you ask. It turns your AI from a tool into a teammate.',
    },
    {
      id: 'agentic',
      icon: '🤖',
      title: 'Agentic Execution',
      description: 'Direct control of your desktop and browser with full transparency. Automation with live subtitles and guided assistance.',
    },
    {
      id: 'memory',
      icon: '🧠',
      title: 'Event-Based Memory',
      description: 'Lightweight, searchable workflow history using smart snapshots. The fuel for proactive intelligence with minimal impact.',
    },
    {
      id: 'control',
      icon: '🛡️',
      title: 'Trust and Control',
      description: 'One-click privacy toggle, app blacklisting, and transparent action logging. You decide what Aura can see and do.',
    },
  ];

  return (
    <section className="py-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-8 max-w-6xl">
        {/* Section Headline */}
        <h2 className="h2 text-center mb-20">
          From Partner to Agent.
        </h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              className="group p-8 bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] transition-all duration-300 hover:border-[var(--cta-vibrant)] hover:shadow-[0_0_30px_rgba(125,95,255,0.15)] cursor-pointer"
              onMouseEnter={() => setHoveredCard(capability.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center text-3xl mb-2">
                  {hoveredCard === capability.id ? (
                    // Animated placeholder - will be enhanced later
                    <div className="w-12 h-12 bg-[var(--cta-vibrant)] rounded-full opacity-80 animate-pulse" />
                  ) : (
                    <span className="filter grayscale group-hover:grayscale-0 transition-all duration-300">
                      {capability.icon}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <h3 className="h3 mb-4 group-hover:text-[var(--cta-vibrant)] transition-colors duration-300">
                {capability.title}
              </h3>
              <p className="body-text">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
