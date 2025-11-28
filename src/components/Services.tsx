import { Handshake, Lightbulb, CheckSquare, Zap, Users, Download } from 'lucide-react';

const services = [
  {
    icon: Handshake,
    title: 'Retainer-Based Partnerships',
    description: 'Ongoing access to executive-level strategy, leadership, and high-touch execution. Think of it as having a fractional CCO on your team.',
    tagline: 'For organizations who need consistent, embedded support.'
  },
  {
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Brand positioning, campaign blueprints, content frameworks, and more. I help you build a plan that works for your goals and your budget.',
    tagline: 'For teams ready to move with clarity and confidence.'
  },
  {
    icon: CheckSquare,
    title: 'Project-Based Support',
    description: 'Website copy, launch campaigns, rebrand rollouts, content libraries—I jump in for high-impact projects that need expert execution.',
    tagline: 'For teams that need to get something done, <em>fast</em>.'
  },
  {
    icon: Zap,
    title: 'VIP Strategy Days',
    description: 'A full or half day of deep-dive consulting to solve a Marketing & Communications challenge, map a campaign, workshop a big idea, or engage in messaging training. You walk away with confidence, clarity, and an actionable roadmap.',
    tagline: 'For organizations that need to move <em>quickly</em> and strategically.'
  },
  {
    icon: Users,
    title: 'Advisory & Coaching',
    description: 'I coach communications professionals, advise executive teams, and serve as a strategic thought partner for leaders navigating growth.',
    tagline: 'For organizations that want a trusted expert in their corner.'
  },
  {
    icon: Download,
    title: 'Steal My Frameworks',
    description: 'Self-serve templates, toolkits, and guides for teams who want to DIY their way to better communications.',
    tagline: 'For scrappy teams who just need the right tools.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4">
            Fractional Communications,
          </h2>
          <h3 className="font-roboto-condensed font-bold text-3xl md:text-4xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent">
            Tailored to Your Needs and Budget
          </h3>
        </div>

        <div className="mb-12">
          <h3 className="font-roboto-condensed font-bold text-2xl md:text-3xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent text-center mb-10">
            How We Work
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-seashell p-8 rounded-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-brick-red text-center"
            >
              <service.icon className="text-brick-red mb-4 mx-auto" size={40} />
              <h4 className="font-roboto-condensed font-bold text-xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-3">
                {service.title}
              </h4>
              <p className="font-roboto text-neutral mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="font-roboto italic text-onyx text-sm" dangerouslySetInnerHTML={{ __html: service.tagline }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
