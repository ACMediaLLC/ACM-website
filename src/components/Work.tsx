import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const recentWorkItems = [
  {
    id: 1,
    client: 'Generocity',
    title: 'Featured article showcasing thought leadership in authentic nonprofit branding and communications strategy',
    services: 'Thought Leadership, Content Strategy, Brand Authenticity',
    image: '/Generocity June 2025.webp'
  },
  {
    id: 2,
    client: 'Hopebound',
    title: 'Strategic communications support for impact reporting and organizational storytelling',
    services: 'Impact Reporting, Content Development, Strategic Communications',
    image: '/Hopebound.webp'
  },
  {
    id: 3,
    client: 'Bottom Line',
    title: 'Multi-year partnership driving program visibility and strategic communications excellence',
    services: 'Annual Reporting, Fractional CCO, Strategic Planning',
    image: '/BottomLine.webp'
  },
  {
    id: 4,
    client: 'City Year Philadelphia',
    title: 'Executive communications counsel and team leadership supporting mission-critical initiatives',
    services: 'Executive Advisory, Team Leadership, Strategic Communications',
    image: '/CityYear.webp'
  }
];

const clientLogos = [
  'Hopebound',
  'Bottom Line',
  'City Year Philadelphia',
  'The Lenfest Foundation',
  'Philadelphia Futures',
  'SPIN (Supporting People In Need)',
  'Project HOME',
  'Mural Arts Philadelphia'
];

export function Work() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-seashell">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4">
            WORK
          </h2>
          <p className="font-roboto text-xl text-neutral max-w-3xl mx-auto">
            From startups to established nonprofits, I partner with organizations ready to elevate their communications strategy and execution
          </p>
        </div>

        <div className="space-y-12 mb-20">
          {recentWorkItems.map((item, index) => (
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
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={item.image}
                  alt={`${item.client} project`}
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="w-full md:w-1/2 bg-[#FFF1E0] p-8 md:p-10 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-roboto-condensed font-bold text-3xl md:text-4xl text-[#E23C46] mb-4">
                  {item.client}
                </h3>
                <p className="font-roboto text-lg text-[#24120F] mb-6 leading-relaxed">
                  {item.title}
                </p>
                <div className="border-t-2 border-[#E23C46]/20 pt-4">
                  <p className="font-roboto-condensed font-semibold text-sm text-[#5C4A42] mb-2 uppercase tracking-wide">
                    Services Provided:
                  </p>
                  <p className="font-roboto text-[#24120F]">
                    {item.services}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t-2 border-brick-red/20 pt-16">
          <h3 className="font-roboto-condensed font-bold text-3xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent text-center mb-12">
            Clients and Organizations I've Worked With/For
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] text-center flex items-center justify-center min-h-[100px] shadow-md hover:shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  border: '2px solid transparent'
                }}
              >
                <p className="font-roboto-condensed font-semibold text-text-primary group-hover:bg-gradient-to-r group-hover:from-brick-red group-hover:to-rose-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {client}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="font-roboto text-xl text-neutral italic mb-6">
            Want to see how we could work together?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 flex items-center gap-2 mx-auto shadow-lg"
          >
            Let's Talk
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
