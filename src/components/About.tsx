import { Award, TrendingUp, Users, Heart } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    text: '20 years leading marketing and communications for mission-driven organizations'
  },
  {
    icon: TrendingUp,
    text: 'Built and scaled communications teams, campaigns, and brands from the ground up'
  },
  {
    icon: Users,
    text: 'Served as interim and fractional CCO for growing organizations and leadership transitions'
  },
  {
    icon: Heart,
    text: 'Led award-winning campaigns recognized by NonProfit PRO and other industry leaders'
  }
];

const outcomes = [
  {
    title: 'Revenue',
    description: 'Strategic campaigns and positioning that drive fundraising, sales, and growth'
  },
  {
    title: 'Recognition',
    description: 'Thought leadership, media placement, and brand visibility that elevate your organization'
  },
  {
    title: 'Relationships',
    description: 'Messaging and engagement strategies that build trust, loyalty, and lasting connections'
  }
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
            Meet Andrea Carter
          </h2>
          <p className="font-roboto-condensed font-semibold text-2xl text-brick-red">
            Fractional Chief Communications Officer | Strategic Communications Leader
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center">
            <p className="font-roboto text-lg text-neutral leading-relaxed mb-6">
              Award-winning marketing and communications executive with 20 years of experience boosting revenue, recognition, and relationships for organizations. Proven success building and leading thriving Marketing & Communications departments while advising CEOs and Boards on executive communications.
            </p>
            <p className="font-roboto text-lg text-neutral leading-relaxed mb-6">
              From national nonprofits to emerging social ventures, I've been the strategic partner leaders turn to when they need someone who can think like a CCO and execute like a pro—without the full-time price tag.
            </p>
            <p className="font-roboto text-lg text-neutral leading-relaxed">
              I built AC Media to give growing organizations access to executive-level communications leadership—on their terms, within their budget.
            </p>
          </div>

          <div className="bg-seashell p-8 rounded-lg border-2 border-brick-red">
            <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-6 text-center">
              Career Highlights
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4">
                  <highlight.icon className="text-brick-red flex-shrink-0" size={24} />
                  <p className="font-roboto text-neutral leading-relaxed">
                    {highlight.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-brick-red/5 border-l-4 border-brick-red p-8 mb-16 text-center">
          <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-4">
            My Philosophy
          </h3>
          <p className="font-roboto text-lg text-neutral leading-relaxed italic">
            "Good communications strategy isn't about doing more—it's about doing the right things, consistently, with intention. Most organizations don't need another vendor. They need a strategic partner who understands their goals, challenges, and capacity—and can help them move forward with clarity and confidence."
          </p>
        </div>

        <div>
          <h3 className="font-roboto-condensed font-bold text-3xl text-brick-red text-center mb-4">
            The AC Media Approach
          </h3>
          <p className="font-roboto text-xl text-neutral text-center mb-12 italic">
            I help organizations achieve three outcomes:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="text-center p-8 bg-seashell rounded-lg hover:shadow-lg transition-all border-2 border-transparent hover:border-brick-red"
              >
                <h4 className="font-roboto-condensed font-bold text-3xl text-brick-red mb-4">
                  {outcome.title}
                </h4>
                <p className="font-roboto text-neutral leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-roboto text-xl text-onyx mb-2">
            Based in Philadelphia, PA
          </p>
          <p className="font-roboto text-lg text-neutral">
            Serving organizations nationwide
          </p>
        </div>
      </div>
    </section>
  );
}
