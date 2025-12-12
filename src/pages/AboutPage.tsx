import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, Send, TrendingUp, Users, Heart, Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Award,
    boldText: 'Built and led high-performing marketing and communications teams',
    regularText: ' that drove engagement, strengthened stakeholder confidence, and broadened organizational influence.'
  },
  {
    icon: TrendingUp,
    boldText: 'Spearheaded a full-scale national rebrand',
    regularText: ' as Chief External Affairs Officer at Bottom Line, leading a new brand identity, new website, and unified messaging across multiple regions while expanding the organization\'s thought leadership footprint through national media and national conference stages.'
  },
  {
    icon: Users,
    boldText: 'Oversaw messaging, media relations, and crisis response',
    regularText: ' for 29 sites nationwide at City Year, advising C-suite leaders on reputation, internal communications, and complex organizational change.'
  },
  {
    icon: Heart,
    boldText: 'Designed and executed strategic advocacy campaigns',
    regularText: ' that independently secured over $1M in government funding in a single year.'
  }
];

const outcomes = [
  {
    title: 'Revenue',
    description: 'Strategic campaigns and positioning that help drive fundraising, sales, and growth'
  },
  {
    title: 'Recognition',
    description: 'Brand visibility and thought leadership that elevate your organization’s identity and authority'
  },
  {
    title: 'Relationships',
    description: 'Messaging and engagement strategies that build trust, credibility, and lasting connections'
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
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              Meet Andrea Carter
            </h1>
            <p className="font-roboto-condensed font-semibold text-2xl text-primary">
              Strategic Communications Leader | Storyteller | Advocate for MarCom Excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex justify-center">
                <div className="bg-white p-2 rounded-lg shadow-md">
                  <img
                    src="/Favorite 1.webp"
                    alt="AC Media Communications Strategy"
                    className="w-full max-w-md lg:max-w-lg object-cover rounded-md object-[55%_center]"
                  />
                </div>
              </div>
              <div>
                <p className="font-roboto text-lg text-neutral leading-relaxed">
                  Award-winning marketing and communications executive with 20 years of experience boosting revenue, recognition, and relationships for organizations. Proven success building and leading thriving Marketing & Communications departments while advising CEOs and Boards on executive communications.
                </p>
              </div>
            </div>

            <div className="bg-seashell p-8 rounded-lg border-2 border-brick-red">
              <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6 text-center" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
                Career Highlights
              </h3>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <highlight.icon className="text-brick-red flex-shrink-0" size={24} />
                    <p className="font-roboto text-neutral leading-relaxed">
                      <strong>{highlight.boldText}</strong>{highlight.regularText}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-brick-red/5 border-l-4 border-brick-red p-8 mb-16 text-center">
            <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6 text-center" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              My Philosophy
            </h3>
            <p className="font-roboto-condensed font-semibold text-2xl mb-4 text-primary">
              Strong communications aren’t built on chance; they’re built on leadership.
            </p>
            <p className="font-roboto text-lg text-neutral leading-relaxed mb-4">
              I’m a fierce advocate for marketing and communications as vital organizational functions that drive growth, alignment, and credibility. I help CEOs, Executive Directors, and leadership teams transform their MarCom departments into strategic engines that drive revenue, recognition, and relationships.
            </p>
            <p className="font-roboto text-lg text-neutral leading-relaxed mb-4">
              My approach combines disciplined strategy with fearless creativity—and the results speak for themselves.      
          </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-seashell">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="font-roboto-condensed font-bold text-3xl md:text-4xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent text-center mb-4" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              The AC Media Approach
            </h2>
           <p className="font-roboto-condensed font-semibold text-center text-2xl mb-4 text-primary">
              AC Media exists to help organizations communicate with clarity, confidence, and consistency, without the full-time overhead of an in-house communications executive.
            </p>
            <p className="font-roboto text-lg text-neutral leading-relaxed mb-4">
              We bring the strategy, leadership, and execution of a Chief Communications Officer to small, midsize, and growing organizations that are ready to think bigger and we pride ourselves in helping them achieve three outcomes:</p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  className="text-center p-8 bg-white rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] shadow-md hover:shadow-2xl"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                  }}
                  style={{
                    backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                    backgroundOrigin: 'padding-box, border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '2px solid transparent'
                  }}
                >
                  <h4 className="font-roboto-condensed font-bold text-3xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
                    {outcome.title}
                  </h4>
                  <p className="font-roboto text-neutral leading-relaxed">
                    {outcome.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <div className="order-2 md:order-1">
                <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
                  Partner with Proven Leadership
                </h3>
                <p className="font-roboto text-lg text-neutral leading-relaxed mb-4">
                  With 20 years of experience leading communications for organizations, I bring strategic thinking, hands-on execution, and a deep understanding of what it takes to build brands and campaigns that drive real results.
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
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 25px rgba(232, 93, 111, 0.4))'}}>
            Ready to Work Together?
          </h2>
          <p className="font-roboto text-xl text-primary mb-10 leading-relaxed">
            Let's discuss how fractional communications leadership can transform your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105"
              style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.4), 0 4px 6px -2px rgba(232, 93, 111, 0.3), 0 0 30px rgba(232, 93, 111, 0.3)'}}
            >
              <Send size={20} />
              Request Your Free Consultation
            </Link>
            <Link
              to="/services"
              className="text-primary font-roboto-condensed font-semibold text-lg hover:bg-gradient-to-r hover:from-brick-red hover:to-rose-500 hover:bg-clip-text hover:text-transparent transition-all flex items-center gap-2"
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
