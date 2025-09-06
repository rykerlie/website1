export default function GoldenThreadSection() {
  const steps = [
    {
      id: 'notice',
      title: 'Notice',
      description: 'Aura watches your workflow and recognizes patterns. When you start repeating a task, a subtle purple glow indicates Aura is learning.',
      visual: 'A user performing repetitive work while a subtle purple indicator shows Aura is observing.',
    },
    {
      id: 'execute',
      title: 'Execute',
      description: 'The mouse moves on its own with smooth, magical precision. Live subtitles explain every action: "Creating folder \'Client XYZ\'..." as Aura completes your workflow.',
      visual: 'Autonomous mouse movement with floating subtitle text explaining the automated actions in real-time.',
    },
    {
      id: 'guide',
      title: 'Guide',
      description: 'When automation isn\'t possible, Aura\'s avatar appears as a glowing orb, transforming into a precise purple arrow pointing exactly where you need to click.',
      visual: 'A minimal light orb transforming into a directional arrow, highlighting specific UI elements.',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="container mx-auto px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="h2 mb-6">
            See The Golden Thread in Action.
          </h2>
          <p className="body-text text-xl max-w-2xl mx-auto">
            From recognizing patterns to executing workflows, experience how Aura transforms repetitive work into effortless automation.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center gap-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--cta-vibrant)] flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="h2 text-[var(--cta-vibrant)]">
                    {step.title}
                  </h3>
                </div>
                <p className="body-text text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Visual Placeholder */}
              <div className="flex-1">
                <div className="aspect-video bg-[var(--bg-secondary)] rounded-2xl border border-[var(--border-color)] p-8 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder animation hint */}
                  <div className="absolute inset-4 border-2 border-dashed border-[var(--border-color)] rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[var(--cta-vibrant)] rounded-full mx-auto mb-4 opacity-30 animate-pulse" />
                      <p className="text-[var(--accent-secondary)] text-sm max-w-xs">
                        {step.visual}
                      </p>
                    </div>
                  </div>

                  {/* Future: Complex animations will be added here */}
                  <div className="absolute bottom-4 right-4 text-xs text-[var(--accent-secondary)] opacity-50">
                    Animation: {step.id}
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
