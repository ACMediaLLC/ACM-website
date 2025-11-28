import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function LogoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const logos = [
    { name: 'Ascensus', url: '/image1.png' },
    { name: 'AWeber', url: '/image2.png' },
    { name: 'Bottom Line', url: '/image3.png' },
    { name: 'STVP', url: '/image4.png' },
    { name: 'Hopebound', url: '/image5.png' },
    { name: 'City Year', url: '/image6.png' },
    { name: 'Poets & Quants', url: '/image7.png' },
    { name: 'Villanova Business', url: '/image8.png' },
  ];

  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 250;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 px-4 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-roboto text-sm uppercase tracking-wider text-neutral font-semibold mb-2">
            Previous Leadership & Consulting Roles
          </p>

        </div>

        <div className="relative">
          {/* Desktop: Infinite scroll animation */}
          <div className="hidden md:flex gap-12 animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Snap scroll carousel with navigation */}
          <div className="md:hidden">
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

            <div ref={carouselRef} className="-mx-4 overflow-x-auto pb-6 snap-scroll-container">
              <div className="flex gap-8 snap-x snap-mandatory px-4">
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="snap-start flex-shrink-0 flex items-center justify-center w-48 h-24"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .snap-scroll-container {
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .snap-scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
