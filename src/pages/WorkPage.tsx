import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoCarousel } from '../components/LogoCarousel';

const caseStudies = [
  {
    title: 'Hopebound',
    description: 'Complete brand positioning and launch campaign for emerging nonprofit',
    services: 'Brand Strategy, Content Development, Campaign Management'
  },
  {
    title: 'City Year Philadelphia',
    description: 'Executive communications counsel and major campaign development',
    services: 'Executive Advisory, Campaign Strategy, Fundraising Support'
  },
  {
    title: 'Bottom Line',
    description: 'Multi-year strategic communications partnership driving program growth and visibility',
    services: 'Fractional CCO, Team Leadership, Strategic Planning'
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
    description:
      'Integrated strategies that create a surround sound effect for your work and brand',
  },
  {
    title: 'Industry Authority & Executive Visibility',
    description: 'Thought leadership that elevates your credibility and influence',
  },
  {
    title: 'Internal & Change Management Communications',
    description: 'Communications that keep teams informed, on-track, and bought in',
  }, // 👈 this comma was missing
  {
    title: 'Content Creation & Media Success',
    description:
      'Expertly crafted storytelling, reports, press releases, and media placements',
  },
];


export function PartnerPage() {
  useEffect(() => {
    document.title = 'Partner With Us | AC Media';
  }, []);

  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = card?.offsetWidth ?? 320;
    const gap = 24;

    const offset = direction === 'left' ? -(cardWidth + gap) : cardWidth + gap;

    carouselRef.current.scrollBy({
      left: offset,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-seashell">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-center max-w-3xl mx-auto">
  
 <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500
             bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
  How We Can Work Together
</h1>

<div className="text-center max-w-3xl mx-auto">
  
  {/* Top red subheading */}
  <p className="font-roboto-condensed font-semibold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
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
  <p className="font-roboto-condensed font-semibold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
    AC Media partners with organizations to help them level up
  </p>

</div>


              </div>

         {/* Navigation buttons */}
         <div className="flex justify-end gap-2 mb-4 pr-4">
           <button
             onClick={() => scrollCarousel('left')}
             className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
             aria-label="Scroll left"
           >
             <ChevronLeft className="w-5 h-5 text-brick-red" />
           </button>
           <button
             onClick={() => scrollCarousel('right')}
             className="p-2 rounded-full bg-white shadow hover:bg-gray-50 transition-colors"
             aria-label="Scroll right"
           >
             <ChevronRight className="w-5 h-5 text-brick-red" />
           </button>
         </div>

         {/* Scroll-snap carousel */}
<div ref={carouselRef} className="-mx-4 md:mx-0 overflow-x-auto pb-6">
  <div className="flex gap-6 snap-x snap-mandatory">
    {partnershipBenefits.map((benefit, index) => (
      <div
        key={index}
        className="snap-start bg-white p-6 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] text-center shadow-md hover:shadow-2xl min-w-[260px] md:min-w-[300px] lg:min-w-[320px]"
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        }}
        style={{
          backgroundImage:
            'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
          backgroundOrigin: 'padding-box, border-box',
          backgroundClip: 'padding-box, border-box',
          border: '2px solid transparent',
        }}
      >
        <h3 className="font-roboto-condensed font-bold text-xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-3" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
          {benefit.title}
        </h3>
        <p className="font-roboto text-neutral leading-relaxed">
          {benefit.description}
        </p>
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              Recent Work
            </h2>
            <p className="font-roboto text-xl text-primary max-w-3xl mx-auto">
              Real results from real partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {caseStudies.map((study, index) => (
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
                className="bg-seashell p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-brick-red text-center"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
              >
                <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-3" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 25px rgba(232, 93, 111, 0.4))'}}>
            Want to See How We Could Work Together?
          </h2>
          <p className="font-roboto text-xl text-primary italic mb-10">
            Let's explore how a partnership could transform your communications strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105"
              style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.4), 0 4px 6px -2px rgba(232, 93, 111, 0.3), 0 0 30px rgba(232, 93, 111, 0.3)'}}
            >
              Let's Talk
              <ExternalLink size={20} />
            </Link>
            <Link
              to="/services"
              className="text-primary font-roboto-condensed font-semibold text-lg hover:bg-gradient-to-r hover:from-brick-red hover:to-rose-500 hover:bg-clip-text hover:text-transparent transition-all flex items-center gap-2"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
