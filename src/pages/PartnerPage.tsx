import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar } from 'lucide-react';
import { LogoCarousel } from '../components/LogoCarousel';

const caseStudies = [
  {
    title: 'Hopebound',
    description: 'Complete brand positioning and launch campaign for emerging nonprofit',
    services: 'Brand Strategy, Content Development, Campaign Management'
  },
  {
    title: 'Bottom Line',
    description: 'Multi-year strategic communications partnership driving program growth and visibility',
    services: 'Fractional CCO, Team Leadership, Strategic Planning'
  },
  {
    title: 'City Year Philadelphia',
    description: 'Executive communications counsel and major campaign development',
    services: 'Executive Advisory, Campaign Strategy, Fundraising Support'
  },
  {
    title: 'AC Media',
    description: 'Building a recognized brand in fractional communications leadership',
    services: 'Brand Development, Thought Leadership, Content Strategy'
  }
];

const partnershipBenefits = [
  {
    title: 'Improved Brand & Reputation',
    description: 'Positioning that is compelling, commands attention, and sets you apart',
  },
  {
    title: 'Aligned Marketing & Communications',
    description: 'Integrated strategies that create a surround sound effect for your work and brand',
  },
  {
    title: 'Industry Authority & Executive Visibility',
    description: 'Thought leadership that elevates your credibility and influence',
  },
  {
    title: 'Internal & Change Management Communications',
    description: 'Communications that keep teams informed, on-track, and bought in',
  }
  {
  title: 'Content Creation & Media Success',
  description: 'Expertly crafted storytelling, reports, press releases, and media placements',
},
];

export function PartnerPage() {
  useEffect(() => {
    document.title = 'Partner With Us | AC Media';
  }, []);

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-seashell">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-center max-w-3xl mx-auto">
  
 <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
  How We Can Work Together
</h1>

<div className="text-center max-w-3xl mx-auto">
  
  {/* Top red subheading */}
  <p className="font-roboto-condensed text-2xl text-brick-red mb-4">
    Whether
  </p>

  {/* Bullet list */}
  
 <ul className="space-y-2 list-disc text-lg text-onyx mb-6 list-inside marker:text-brick-red ml-6">
  <li>Your marketing & communications team is stretched too thin</li>
  <li>You need strategic thinking, not just task execution</li>
  <li>Your growth demands communications leadership, but not a full-time hire</li>
  <li>You want someone who can lead, not just follow directions</li>
</ul>

  {/* Bottom red subheading */}
  <p className="font-roboto-condensed text-2xl text-brick-red">
    AC Media partners with organizations to help them level up
  </p>

</div>


              </div>



            
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {partnershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] text-center shadow-md hover:shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  border: '2px solid transparent'
                }}
              >
                <h3 className="font-roboto-condensed font-bold text-xl text-brick-red mb-3">
                  {benefit.title}
                </h3>
                <p className="font-roboto text-neutral leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
              Recent Work
            </h2>
            <p className="font-roboto text-xl text-primary max-w-3xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-seashell p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-brick-red text-center"
              >
                <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-3">
                  {study.title}
                </h3>
                <p className="font-roboto text-lg text-text-primary mb-4 leading-relaxed">
                  {study.description}
                </p>
                <div className="border-t-2 border-white pt-4">
                  <p className="font-roboto-condensed font-semibold text-sm text-neutral mb-2">
                    SERVICES PROVIDED:
                  </p>
                  <p className="font-roboto text-onyx">
                    {study.services}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
            Want to See How We Could Work Together?
          </h2>
          <p className="font-roboto text-xl text-primary italic mb-10">
            Let's explore how a partnership could transform your communications strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              Let's Talk
              <ExternalLink size={20} />
            </Link>
            <Link
              to="/services"
              className="text-primary font-roboto-condensed font-semibold text-lg hover:text-brick-red transition-colors flex items-center gap-2"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
