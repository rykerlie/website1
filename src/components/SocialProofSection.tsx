export default function SocialProofSection() {
  const logos = [
    { name: 'MIT', width: 80, height: 40 },
    { name: 'Stanford AI Lab', width: 120, height: 40 },
    { name: 'PyTorch', width: 100, height: 40 },
    { name: 'OpenAI', width: 90, height: 40 },
    { name: 'Hugging Face', width: 110, height: 40 },
    { name: 'ArXiv', width: 70, height: 40 },
  ];

  return (
    <section className="py-24 border-b border-[var(--border-color)]">
      <div className="container mx-auto px-8">
        {/* Headline */}
        <h3 className="h3 text-[var(--accent-secondary)] text-center mb-16 opacity-60 tracking-wider uppercase text-sm font-medium">
          Built on a foundation of world-class research and technology
        </h3>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-60">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-10 text-[var(--accent-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-300"
              style={{ width: `${logo.width}px` }}
            >
              {/* Placeholder for actual logos - using text for now */}
              <span className="text-sm font-medium tracking-wide">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
