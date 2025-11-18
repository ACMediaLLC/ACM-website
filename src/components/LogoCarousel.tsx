export function LogoCarousel() {
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

  return (
    <section className="py-16 px-4 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-roboto text-sm uppercase tracking-wider text-neutral font-semibold mb-2">
            Trusted By
          </p>
        
        </div>

        <div className="relative">
          <div className="flex gap-12 animate-scroll">
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
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        @media (max-width: 767px) {
          .animate-scroll {
            animation: scroll 8s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
