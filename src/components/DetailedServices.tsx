import { useState } from 'react';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

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
      'Executive-level strategy and leadership',
      'Team management and coaching',
      'Ongoing content, messaging, and campaign execution',
      'Consistency, continuity, and measurable results'
      'Executive counsel and advisory support'
    ],
    bestFor: 'Organizations who need ongoing, high-touch support and executive-level thinking'
  },
  {
    title: 'Strategy Development',
    recommended: false,
    forWhen: 'when you need expert guidance to develop a clear, actionable roadmap',
    deliverables: [
      'Marketing & Communications Strategy',
      'Messaging & Positioning Strategy',
      'Thought Leadership Strategy',
      'Media Relations & Press Strategy'
      'Internal Communications Strategy'
      'Change Management Communications Plan'
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

export function DetailedServices() {
  const [expandedPainPoints, setExpandedPainPoints] = useState(false);

  return (
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
            <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red">
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
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative border-2 border-transparent hover:border-brick-red"
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
                    <li key={idx} className="flex items-start gap-2 font-roboto text-neutral">
                      <span className="text-brick-red mt-1">•</span>
                      <span>{item}</span>
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
          <p className="font-roboto text-xl md:text-2xl text-onyx italic">
            No overhead. No delay. Just expert leadership and fast execution.
          </p>
        </div>
      </div>
    </section>
  );
}
