import WaitlistForm from '@/components/WaitlistForm';

export default function AboutSection() {
  const founders = [
    {
      name: 'Alex Grant',
      title: 'Co-Founder & CEO',
      image: '/placeholder-founder-1.jpg', // Placeholder for now
    },
    {
      name: 'Dr. Lena Orin',
      title: 'Co-Founder & CTO', 
      image: '/placeholder-founder-2.jpg', // Placeholder for now
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[var(--bg-primary)] to-[var(--bg-secondary)]">
      <div className="container mx-auto px-8 max-w-4xl">
        
        {/* About Us */}
        <div className="text-center mb-20">
          <h2 className="h2 mb-12">
            Built by experts who believe work should be effortless.
          </h2>
          
          {/* Founders */}
          <div className="flex justify-center gap-16 mb-16">
            {founders.map((founder) => (
              <div key={founder.name} className="text-center">
                {/* Photo placeholder */}
                <div className="w-32 h-32 bg-[var(--bg-secondary)] rounded-full mx-auto mb-4 border border-[var(--border-color)] flex items-center justify-center">
                  <div className="w-16 h-16 bg-[var(--accent-secondary)] rounded-full opacity-30" />
                </div>
                <h3 className="h3 mb-2">{founder.name}</h3>
                <p className="body-text">{founder.title}</p>
              </div>
            ))}
          </div>

          <p className="body-text text-lg leading-relaxed max-w-2xl mx-auto">
            We're building the future where AI doesn't just respond to your needs—it anticipates them. 
            Aura represents a fundamental shift from reactive tools to proactive partners.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h2 className="h2 mb-8 max-w-3xl mx-auto">
            The future of work is not more tools. It's a better partner.
          </h2>
          
          <p className="body-text text-lg mb-12 max-w-2xl mx-auto">
            Join the waitlist to be among the first to experience truly proactive AI.
          </p>

          {/* Final Waitlist Form */}
          <div className="flex justify-center">
            <WaitlistForm size="lg" className="w-full max-w-lg" />
          </div>

          {/* Footer note */}
          <p className="text-[var(--accent-secondary)] text-sm mt-12">
            Early access starts Q2 2024. No spam, just updates.
          </p>
        </div>
      </div>
    </section>
  );
}
