import { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { LogoCarousel } from './LogoCarousel';

const testimonials = [
  {
    quote: "Andrea is a true strategic partner who brings both creative thinking and operational excellence to every project. Her ability to translate complex ideas into compelling narratives is unmatched.",
    author: "CEO, National Nonprofit Organization"
  },
  {
    quote: "Working with Andrea transformed how we think about communications. She didn't just execute—she led, advised, and elevated our entire approach.",
    author: "Executive Director, Education Nonprofit"
  },
  {
    quote: "Andrea brings the strategic mindset of a CCO with the hands-on execution of a doer. That combination is rare and invaluable.",
    author: "Founder, Social Impact Startup"
  },
  {
    quote: "She helped us clarify our message, strengthen our brand, and create campaigns that actually drove results. Best investment we made all year.",
    author: "Marketing Director, Growing Organization"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const visibleTestimonials = 3;
  const totalSlides = testimonials.length - visibleTestimonials + 1;

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
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
            What Clients Are Saying
          </h2>
        </div>

        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleTestimonials}%` }}
                >
                  <div className="bg-seashell p-8 rounded-lg border-2 border-onyx/10 hover:border-brick-red transition-all relative h-full">
                    <Quote className="text-brick-red/20 absolute top-4 right-4" size={48} />
                    <p className="font-roboto text-lg text-neutral mb-6 leading-relaxed relative z-10 text-center">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-roboto-condensed font-semibold text-onyx text-center">
                      — {testimonial.author}
                    </p>
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

        <div className="mt-16 bg-brick-red/5 border-2 border-brick-red rounded-lg p-8 text-center">
          <p className="font-roboto text-xl text-text-primary mb-4">
            "Andrea doesn't just check boxes—she transforms how organizations think about and execute their communications strategy."
          </p>
          <p className="font-roboto-condensed font-semibold text-brick-red">
            — Board Chair, Philadelphia-based Nonprofit
          </p>
        </div>
      </div>

      <LogoCarousel />
    </section>
  );
}
