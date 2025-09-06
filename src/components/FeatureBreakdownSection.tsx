export default function FeatureBreakdownSection() {
  const features = [
    {
      id: 'desktop-companion',
      title: 'Desktop Companion',
      description: 'A floating overlay that\'s always available for quick chats and commands. Toggle screen awareness on/off with a single click for complete privacy control.',
      visual: 'Minimal floating interface with awareness toggle',
      icon: '💻',
    },
    {
      id: 'transparent-automation',
      title: 'Transparent Automation',
      description: 'Watch Aura work with live subtitles explaining every action. See exactly what it\'s doing as it operates your apps with precision and speed.',
      visual: 'Mouse automation with real-time subtitle overlay',
      icon: '🔍',
    },
    {
      id: 'rewind-capability',
      title: 'Rewind & Memory',
      description: 'Lightweight event-based snapshots create a searchable timeline of your workflow. Find any past moment by describing it naturally.',
      visual: 'Timeline scrubber with searchable workflow history',
      icon: '⏮️',
    },
    {
      id: 'trust-control',
      title: 'Trust & Control',
      description: 'App blacklisting prevents Aura from seeing sensitive applications. Every action is logged and reviewable, putting you in complete control.',
      visual: 'Shield interface with app permissions and action logs',
      icon: '🛡️',
    },
  ];

  return (
    <section className="py-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex items-center gap-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl" aria-hidden="true">
                    {feature.icon}
                  </span>
                  <div className="w-8 h-px bg-[var(--cta-vibrant)]" />
                </div>
                <h3 className="h2">
                  {feature.title}
                </h3>
                <p className="body-text text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual Metaphor */}
              <div className="flex-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] rounded-2xl border border-[var(--border-color)] p-8 flex items-center justify-center relative overflow-hidden">
                  {/* Abstract visual metaphor placeholder */}
                  <div className="text-center">
                    <div className="relative">
                      {/* Central element */}
                      <div className="w-24 h-24 bg-[var(--cta-vibrant)] rounded-2xl mx-auto mb-6 opacity-20 flex items-center justify-center">
                        <span className="text-2xl opacity-70">{feature.icon}</span>
                      </div>
                      
                      {/* Surrounding elements for visual interest */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-[var(--cta-vibrant)] rounded-full opacity-60 animate-pulse" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[var(--accent-secondary)] rounded-full opacity-40" />
                    </div>
                    <p className="text-[var(--accent-secondary)] text-sm max-w-xs mx-auto">
                      {feature.visual}
                    </p>
                  </div>

                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div
                          key={i}
                          className="border border-[var(--accent-secondary)]"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
