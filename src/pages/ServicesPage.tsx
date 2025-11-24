import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Handshake, Lightbulb, CheckSquare, Zap, Users, Download, ChevronDown, ChevronUp, Star, Calendar } from 'lucide-react';

const services = [
  {
    icon: Handshake,
    title: 'Retainer-Based Partnerships',
    description: 'Ongoing access to executive-level strategy, leadership, and high-touch execution. Think of it as having a CCO on your team, but at a fraction of the cost.',
    tagline: 'For organizations who need consistent, embedded support.'
  },
  {
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Custom marketing, communications, messaging, and thought leadership strategies built for impact and easy implementation.',
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

const painPoints = [
  'Your marketing team is stretched too thin',
  'You need strategic thinking, not just task execution',
  'Your growth demands communications leadership—but not a full-time hire',
  'You want someone who can lead, not just follow directions'
];

const detailedServices = [
  {
    title: 'Fractional Executive Leadership',
    recommended: true,
    forWhen: 'when you need an embedded communications leader on your team',
    deliverables: [
      'Strategic planning and leadership',
      'Team management and coaching',
      'Campaign development and oversight',
      'Executive counsel and advisory support'
    ],
    bestFor: 'Organizations who need ongoing, high-touch support and executive-level thinking'
  },
  {
    title: 'Strategy Development',
    recommended: false,
    forWhen: 'when you have a clear project or campaign that needs a plan',
    deliverables: [
      'Brand positioning and messaging frameworks',
      'Campaign blueprints and content strategies',
      'Audience research and segmentation',
      'Strategic roadmaps and action plans'
    ],
    bestFor: 'Teams ready to move forward with clarity and direction'
  },
  {
    title: 'Project-Based Execution',
    recommended: false,
    forWhen: 'when you need expert execution on a specific initiative',
    deliverables: [
      'Website copy and content development',
      'Campaign launches and rollouts',
      'Rebrand and positioning projects',
      'Content libraries and resource creation'
    ],
    bestFor: 'Organizations with a defined project that needs high-quality execution'
  },
  {
    title: 'VIP Strategy Days',
    recommended: false,
    forWhen: 'when you need intensive focus to solve a specific challenge',
    deliverables: [
      'Full-day strategic workshop',
      'Campaign mapping and planning',
      'Challenge-solving sessions',
      'Actionable roadmap and next steps'
    ],
    bestFor: 'Leaders who need quick wins and strategic clarity'
  }
];

export function ServicesPage() {
  const [expandedPainPoints, setExpandedPainPoints] = useState(false);

  useEffect(() => {
    document.title = 'Services | AC Media';
  }, []);

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
              Fractional Communications
            </h1>
            <h2 className="font-roboto-condensed font-bold text-3xl md:text-4xl text-primary mb-6">
              Tailored to Your Needs and Budget
            </h2>
            <p className="font-roboto text-xl text-neutral max-w-3xl mx-auto">
              Whether you need a seasoned communications executive embedded into your organization, a short-term strategic boost, or a do-it-yourself framework you can steal from my arsenal, AC Media has you covered.
            </p>
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
                className="group bg-seashell p-8 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] text-center shadow-md hover:shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  border: '2px solid transparent'
                }}
              >
                <service.icon className="text-primary mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3" size={40} />
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-seashell">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
              Something for Every Need, Every Budget
            </h2>
          </div>

          <div className="bg-white rounded-lg p-8 mb-12 border-2 border-brick-red">
            <button
              onClick={() => setExpandedPainPoints(!expandedPainPoints)}
              className="w-full flex justify-between items-center"
            >
              <h3 className="font-roboto-condensed font-bold text-2xl text-primary">
                Need This?
              </h3>
              {expandedPainPoints ? <ChevronUp className="text-brick-red" size={28} /> : <ChevronDown className="text-brick-red" size={28} />}
            </button>

            {expandedPainPoints && (
              <ul className="mt-6 space-y-3">
                {painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 font-roboto text-neutral">
                    <span className="text-brick-red mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative border-2 border-transparent hover:border-brick-red text-center"
              >
                {service.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brick-red text-white px-6 py-2 rounded-full font-roboto-condensed font-bold text-sm flex items-center gap-2">
                    <Star size={16} fill="white" />
                    MOST RECOMMENDED
                  </div>
                )}

                <h4 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-4 mt-4">
                  {service.title}
                </h4>

                <p className="font-roboto italic text-onyx mb-6">
                  For {service.forWhen}
                </p>

                <div className="mb-6">
                  <p className="font-roboto-condensed font-semibold text-text-primary mb-3">
                    Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="font-roboto text-neutral">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t-2 border-seashell pt-4">
                  <p className="font-roboto-condensed font-semibold text-text-primary mb-2">
                    Best for:
                  </p>
                  <p className="font-roboto text-neutral">
                    {service.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-roboto text-xl md:text-2xl text-onyx italic mb-8">
              No overhead. No delay. Just expert leadership and fast execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-roboto text-xl text-primary mb-10 leading-relaxed">
            Let's discuss which service model is right for your organization
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 items-center gap-2 shadow-lg"
          >
            <Calendar size={20} />
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
