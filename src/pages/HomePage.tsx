import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, BookOpen, Handshake, Lightbulb, CheckSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoCarousel } from '../components/LogoCarousel';

const featuredServices = [
  {
    icon: Handshake,
    title: 'Retainer-Based Partnerships',
    description: 'Ongoing access to executive-level strategy and execution',
    link: '/services'
  },
  {
    icon: Lightbulb,
    title: 'Strategy Development',
    description: 'Custom communications, messaging, and thought leadership strategies',
    link: '/services'
  },
  {
    icon: CheckSquare,
    title: 'Project-Based Support',
    description: 'High-impact projects with expert execution',
    link: '/services'
  }
];

const featuredTestimonials = [
  {
    quote: "Andrea has been an incredible partner in helping us bring our story to life. She guided the creation of our first-ever Annual Report with such creativity, clarity, and care, capturing the heart of our mission while elevating the way we communicate our impact.",
    role: "Nonprofit CEO"
  },
  {
    quote: "Andrea developed a thoughtful suite of marketing and communications resources that have strengthened our brand and built internal confidence in how we share our work.",
    role: "Non profit CEO"
  },
  {
    quote: "I knew we would be in great hands—and she exceeded even those high expectations.",
    role: "Nonprofit CEO"
  },
  {
    quote: "If anyone needs any guidance in the world of marketing and communication strategy, definitely check out AC Media. She is SO incredibly talented and an absolute pleasure to work with.",
    role: "Designer & Art Director"
  }
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleCards = 1;
  const totalSlides = featuredTestimonials.length;

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-seashell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-primary mb-4">
            What Clients Say
          </h2>
        </div>

        <div className="relative mb-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
            >
              {featuredTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  <div className="bg-white p-8 rounded-lg shadow-lg h-full hover:shadow-xl transition-all">
                    <p className="font-roboto text-lg text-neutral mb-6 leading-relaxed italic text-center">
                      "{testimonial.quote}"
                    </p>
                    <div className="text-center">
                      <p className="font-roboto text-sm text-neutral">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all hover:bg-brick-red hover:text-white"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg transition-all hover:bg-brick-red hover:text-white"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-brick-red' : 'w-2 bg-onyx/20 hover:bg-onyx/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/testimonials"
            className="text-brick-red font-roboto-condensed font-semibold text-lg hover:text-onyx transition-colors"
          >
            Read More Success Stories →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useEffect(() => {
    document.title = 'AC Media | Fractional Chief Communications Officer';
  }, []);

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-brick-red">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center justify-items-center mb-12">
            <div className="text-center">
              <h1 className="font-roboto-condensed font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
                Get a Chief Communications Officer—
                <span className="text-seashell">Without the $200K Price Tag</span>
              </h1>

              <p className="font-roboto text-base md:text-2xl text-white/90 mb-8 leading-normal">
                AC Media helps organizations communicate with clarity, confidence, and consistency without the full-time overhead of an in-house communications executive.
              </p>

              <div className="bg-white border-2 border-brick-red rounded-lg p-6 mb-10 max-w-2xl mx-auto relative overflow-hidden shadow-[0_0_80px_rgba(220,38,38,0.3)]">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-full h-full bg-gradient-radial from-brick-red/30 via-brick-red/10 to-transparent"></div>
                  <div className="w-48 h-48 bg-brick-red rounded-full blur-3xl opacity-10 "></div>
                </div>
                <div className="relative z-10">
                  <p className="font-roboto-condensed font-semibold text-lg text-text-primary mb-2">
                    Perfect for:
                  </p>
                  <p className="font-roboto text-neutral">
                    CEOs and Executive Directors ready to move faster, scale smarter, and look like the pros—without hiring a full-time executive
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-white p-2 rounded-lg shadow-md">
                <img
                  src="/Favorite 1.webp"
                  alt="AC Media Communications Strategy"
                  className="w-full max-w-md lg:max-w-lg object-cover rounded-md object-[55%_center]"
                />
              </div>
            </div>
          </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              to="/services"
              className="bg-onyx text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-black transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              See How It Works
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/contact"
              className="bg-onyx text-white border-2 border-onyx px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-black transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Calendar size={20} />
              Book a No-Cost Intro Call
            </Link>
          </div>

          <Link
            to="/resources"
            className="text-onyx bg-white px-6 py-3 rounded-lg font-roboto-condensed font-semibold text-lg hover:bg-seashell transition-colors flex items-center gap-2 mx-auto justify-center w-fit shadow-md mb-8"
          >
            <BookOpen size={20} />
            Explore My Free Resources
          </Link>

          <p className="font-roboto italic text-2xl text-white">
            Skip the overhead. Keep the excellence.
          </p>
        </div>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500
             bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              Flexible Services for Every Need
            </h2>
            <p className="font-roboto-condensed font-semibold text-center text-2xl mb-4 text-primary">
              From ongoing partnerships to one-time projects, get the support you need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
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
                className="group relative bg-seashell p-8 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] text-center shadow-md hover:shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  border: '2px solid transparent',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  transition: 'box-shadow 0.3s ease-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
              >
                <service.icon
                  className="text-brick-red mb-4 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                  size={40}
                />
                <h3 className="font-roboto-condensed font-bold text-xl text-brick-red mb-3">
                  {service.title}
                </h3>
                <p className="font-roboto text-neutral mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="text-brick-red font-roboto-condensed font-semibold hover:text-onyx transition-all inline-flex items-center gap-2 group/link"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105"
              style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.3), 0 4px 6px -2px rgba(232, 93, 111, 0.2), 0 0 20px rgba(232, 93, 111, 0.25)'}}
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-brick-red/5 via-transparent to-transparent opacity-50" style={{background: 'radial-gradient(circle at center, rgba(232, 93, 111, 0.08) 0%, transparent 70%)'}}></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500
             bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 25px rgba(232, 93, 111, 0.4))'}}>
            Ready to Elevate Your Communications?
          </h2>
          <p className="font-roboto text-xl text-primary mb-10 leading-relaxed">
            Let's talk about how fractional communications leadership can transform your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105"
              style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.4), 0 4px 6px -2px rgba(232, 93, 111, 0.3), 0 0 30px rgba(232, 93, 111, 0.3)'}}
            >
              <Calendar size={20} />
              Schedule Your Free Consultation
            </Link>
            <Link
              to="/about"
              className="text-primary font-roboto-condensed font-semibold text-lg hover:text-brick-red transition-colors flex items-center gap-2"
            >
              Learn More About Andrea
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
