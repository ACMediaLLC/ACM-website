import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, TrendingUp, Users, Heart, Calendar, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    text: '<strong>Built and led high-performing marketing and communications teams</strong> that drove engagement, strengthened stakeholder confidence, and broadened organizational influence.'
  },
  {
    icon: TrendingUp,
    text: 'Spearheaded a full-scale national rebrand as Chief External Affairs Officer at Bottom Line, leading a new brand identity, new website, and unified messaging across multiple regions while expanding the organization’s thought leadership footprint through national media and national conference stages. '
  },
  {
    icon: Users,
    text: 'Oversaw messaging, media relations, and crisis response for 29 sites nationwide at City Year, advising C-suite leaders on reputation, internal communications, and complex organizational change.'
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

export function AboutPage() {
  useEffect(() => {
    document.title = 'About Andrea Carter | AC Media';
  }, []);

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
              Meet Andrea Carter
            </h1>
            <p className="font-roboto-condensed font-semibold text-2xl text-primary">
              Strategic Communications Leader | Storyteller | Advocate for MarCom Excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
            <div className="flex justify-center">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img
                  src="/Favorite 1.webp"
                  alt="AC Media Communications Strategy"
                  className="w-full max-w-md lg:max-w-lg object-cover rounded-md object-[55%_center]"
                />
              </div>
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

          <div className="max-w-4xl mx-auto mb-16">
            <p className="font-roboto text-lg text-neutral leading-relaxed mb-6">
              I've spent two decades helping organizations clarify their message, strengthen their brand, and execute communications strategies that actually move the needle.
            </p>
            <p className="font-roboto text-lg text-neutral leading-relaxed mb-6">
              From national nonprofits to emerging social ventures, I've been the strategic partner leaders turn to when they need someone who can think like a CCO and execute like a pro—without the full-time price tag.
            </p>
            <p className="font-roboto text-lg text-neutral leading-relaxed">
              I built AC Media to give growing organizations access to executive-level communications leadership—on their terms, within their budget.
            </p>
          </div>

          <div className="bg-brick-red/5 border-l-4 border-brick-red p-8 mb-16 text-center">
            <h3 className="font-roboto-condensed font-bold text-2xl text-primary mb-4">
              My Philosophy
            </h3>
            <p className="font-roboto text-lg text-neutral leading-relaxed italic">
              "Good communications strategy isn't about doing more—it's about doing the right things, consistently, with intention. Most organizations don't need another vendor. They need a strategic partner who understands their goals, challenges, and capacity—and can help them move forward with clarity and confidence."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-seashell">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="font-roboto-condensed font-bold text-3xl md:text-4xl text-brick-red text-center mb-4">
              The AC Media Approach
            </h2>
            <p className="font-roboto text-xl text-primary text-center mb-12 italic">
              I help organizations achieve three outcomes:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] shadow-md hover:shadow-2xl"
                  style={{
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                    backgroundOrigin: 'padding-box, border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '2px solid transparent'
                  }}
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

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="order-2 md:order-1">
                <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-6">
                  Partner with Proven Leadership
                </h3>
                <p className="font-roboto text-lg text-neutral leading-relaxed mb-4">
                  With 20 years of experience leading communications for mission-driven organizations, I bring strategic thinking, hands-on execution, and a deep understanding of what it takes to build brands and campaigns that drive real results.
                </p>
                <p className="font-roboto text-lg text-neutral leading-relaxed">
                  Whether you need interim leadership during a transition, fractional support to scale your team, or strategic guidance on a specific initiative, I'm here to help you move forward with confidence.
                </p>
              </div>
              <div className="order-1 md:order-2 flex items-center justify-center">
                <div className="relative w-full max-w-sm mx-auto">
                  <picture className="block">
                    <source srcSet="/Favorite-2.webp" type="image/webp" />
                    <img
                      src="/Favorite 2.jpg"
                      alt="Andrea Carter, Strategic Communications Expert"
                      className="rounded-lg shadow-xl border-2 border-brick-red/30 w-full object-cover hover:scale-105 transition-transform duration-300 mx-auto"
                      width="384"
                      height="512"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 -translate-x-8 w-20 h-20 bg-brick-red/20 rounded-lg -z-10"></div>
                </div>
              </div>
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
            Ready to Work Together?
          </h2>
          <p className="font-roboto text-xl text-primary mb-10 leading-relaxed">
            Let's discuss how fractional communications leadership can transform your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Calendar size={20} />
              Schedule Your Free Consultation
            </Link>
            <Link
              to="/services"
              className="text-primary font-roboto-condensed font-semibold text-lg hover:text-brick-red transition-colors flex items-center gap-2"
            >
              Explore Services
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
