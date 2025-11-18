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
    tagline: 'For teams that need to get something done, fast.'
  },
  {
    icon: Zap,
    title: 'VIP Strategy Days',
    description: 'One intensive day together to solve a challenge, map a campaign, or workshop a big idea. You walk away with clarity and a plan.',
    tagline: 'For leaders who need to move quickly and strategically.'
  },
  {
    icon: Users,
    title: 'Advisory & Coaching',
    description: 'I coach communications professionals, advise executive teams, and serve as a strategic thought partner for leaders navigating growth.',
    tagline: 'For professionals who want a trusted expert in their corner.'
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
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
            Fractional Communications,
          </h2>
          <h3 className="font-roboto-condensed font-bold text-3xl md:text-4xl text-brick-red">
            Tailored to Your Needs and Budget
          </h3>
        </div>

        <div className="mb-12">
          <h3 className="font-roboto-condensed font-bold text-2xl md:text-3xl text-brick-red text-center mb-10">
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
              <h4 className="font-roboto-condensed font-bold text-xl text-brick-red mb-3">
                {service.title}
              </h4>
              <p className="font-roboto text-neutral mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="font-roboto italic text-onyx text-sm">
                {service.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
