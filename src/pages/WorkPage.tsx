import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoCarousel } from '../components/LogoCarousel';

interface WorkItem {
  id: number;
  client: string;
  subtitle: string;
  need: string;
  work: string;
  wins: string[];
  image: string;
  mobileImage?: string;
  desktopSecondaryImage?: string;
  images?: string[];
}

const recentWorkItems: WorkItem[] = [
  {
    id: 1,
    client: 'Hopebound',
    subtitle: 'From Data to Donor-Ready in 10 Weeks',
    need: 'A high-impact Annual Report and fundraising materials on a compressed timeline',
    work: 'Project leadership, storytelling, full design, social media promotion, and fundraising collateral',
    wins: [
      '10-week end-to-end Annual Report delivery',
      'Complete donor + sales material suite',
      'Elevated brand clarity and fundraising readiness'
    ],
    image: '/Hopebound.webp',
    mobileImage: '/hopebound2.webp',
    desktopSecondaryImage: '/hopebound2.webp'
  },
  {
    id: 2,
    client: 'City Year Philadelphia',
    subtitle: 'Turning Visibility Into Funding',
    need: 'Reignite brand visibility, revenue, and community engagement',
    work: 'Media relations, executive thought leadership, publicity stunt, GivingTuesday strategy, messaging training',
    wins: [
      '40+ media placements',
      '$1M in city & state funding secured in a single fiscal year',
      '3 years of GivingTuesday goals met',
      '500+ new followers and 50% engagement growth',
      'First-ever citywide publicity stunt'
    ],
    image: '/CityYear.webp',
    mobileImage: '/CityYear.webp',
    images: ['/CityYear.webp', '/cityyear2.jpg', '/cityyear3.jpg']
  },
  {
    id: 3,
    client: 'Bottom Line',
    subtitle: 'National Brand Refresh, End to End',
    need: 'Modernize the brand and scale external affairs nationally',
    work: 'Brand refresh leadership, website overhaul, earned media, team scaling',
    wins: [
      'External Affairs team grew 2 → 5',
      'First-ever organization-wide rebrand',
      'New website launch',
      'Expanded national thought leadership footprint'
    ],
    image: '/BottomLine.webp',
    mobileImage: '/bottomline2.webp',
    desktopSecondaryImage: '/bottomline2 copy.webp'
  },
  {
    id: 4,
    client: 'AC Media',
    subtitle: 'Built to Revenue in 6 Months',
    need: 'Launch a credible, revenue-generating fractional MarCom business from scratch',
    work: 'Brand identity, website, messaging, newsletter, LinkedIn thought leadership, workshops, live networking',
    wins: [
      '5 proposal requests',
      '2 multi-month clients secured',
      '1 small business grant awarded',
      '2 viral LinkedIn posts',
      '200+ new followers',
      '2 thought leadership articles published',
      '40 newsletter subscribers'
    ],
    image: '/acmedia2 copy.webp',
    mobileImage: '/acmedia2 copy.webp',
    images: ['/acmedia2 copy.webp', '/newclientannouncement.webp', '/acmedia3.webp']
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.title = 'Partner With Us | AC Media';
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
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
            <p className="font-roboto-condensed font-semibold text-center text-2xl text-primary mb-4">
              Real results from real partnerships
            </p>
          </div>

          <div className="flex flex-col gap-12 mb-20 items-center md:items-stretch">
            {recentWorkItems.map((item, index) => {
              const isVerticalLayout = item.id === 2 || item.id === 4;

              if (isVerticalLayout) {
                const reorderedImages = item.images ? [...item.images] : [];

                if (item.id === 2 && reorderedImages.length === 3) {
                  [reorderedImages[0], reorderedImages[1]] = [reorderedImages[1], reorderedImages[0]];
                } else if (item.id === 4 && reorderedImages.length === 3) {
                  [reorderedImages[0], reorderedImages[1]] = [reorderedImages[1], reorderedImages[0]];
                }

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.25, 0.4, 0.25, 1]
                    }}
                    className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl md:max-w-none"
                  >
                    {/* Mobile: Show single image first */}
                    {isMobile && item.mobileImage && (
                      <div className="rounded-xl overflow-hidden shadow-md md:hidden">
                        <img
                          src={item.mobileImage}
                          alt={item.client}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    )}

                    {/* Desktop: Show text card first, mobile: show text card second */}
                    <div
                      className="bg-seashell rounded-xl shadow-lg p-6 md:p-8 transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-brick-red text-center"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-[#24120F] mb-2">
                        {item.client} — {item.subtitle}
                      </h3>
                      <div className="space-y-3 mt-4">
                        <p className="text-[#24120F] leading-relaxed">
                          <span className="font-semibold">The Need:</span> {item.need}
                        </p>
                        <p className="text-[#24120F] leading-relaxed">
                          <span className="font-semibold">The Work:</span> {item.work}
                        </p>
                        <div>
                          <p className="text-[#24120F] font-semibold mb-2">The Win:</p>
                          <ul className="space-y-1 list-disc text-[#24120F] marker:text-brick-red inline-block text-left">
                            {item.wins.map((win, winIndex) => (
                              <li key={winIndex} className="ml-4">{win}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Desktop: Show image gallery (hidden on mobile) */}
                    {!isMobile && reorderedImages.length > 0 && (
                      <div className="hidden md:flex flex-row gap-4 md:gap-6 items-center justify-center">
                        {reorderedImages.map((img, imgIndex) => {
                          const isCenterImage = imgIndex === 1;

                          return (
                            <div
                              key={imgIndex}
                              className={`rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl ${
                                isCenterImage
                                  ? 'flex-[1.4] max-w-[500px]'
                                  : 'flex-[0.8] max-w-[320px]'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`${item.client} - Image ${imgIndex + 1}`}
                                className="w-full h-auto object-contain"
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  className={`flex flex-col md:flex md:items-center md:gap-10 w-full max-w-2xl md:max-w-none ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                    {isMobile ? (
                      <img
                        src={item.mobileImage || item.image}
                        alt={item.client}
                        className="w-full h-full object-cover"
                      />
                    ) : item.desktopSecondaryImage ? (
                      <div className="flex gap-4">
                        <div className="flex-1 rounded-xl overflow-hidden shadow-md">
                          <img
                            src={item.image}
                            alt={item.client}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 rounded-xl overflow-hidden shadow-md">
                          <img
                            src={item.desktopSecondaryImage}
                            alt={`${item.client} - Secondary`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.image}
                        alt={item.client}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  <div className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0">
                    <div
                      className="bg-seashell rounded-xl shadow-lg p-6 md:p-8 transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-brick-red"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                      }}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-[#24120F] mb-2">
                        {item.client} — {item.subtitle}
                      </h3>
                      <div className="space-y-3 mt-4">
                        <p className="text-[#24120F] leading-relaxed">
                          <span className="font-semibold">The Need:</span> {item.need}
                        </p>
                        <p className="text-[#24120F] leading-relaxed">
                          <span className="font-semibold">The Work:</span> {item.work}
                        </p>
                        <div>
                          <p className="text-[#24120F] font-semibold mb-2">The Win:</p>
                          <ul className="space-y-1 list-disc text-[#24120F] list-inside marker:text-brick-red ml-4">
                            {item.wins.map((win, winIndex) => (
                              <li key={winIndex}>{win}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
