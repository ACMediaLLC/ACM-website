import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

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
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
              }}
              className="group bg-seashell p-8 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] text-center shadow-md hover:shadow-2xl"
              style={{
                backgroundImage: 'linear-gradient(#FFF5ED, #FFF5ED), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                backgroundOrigin: 'padding-box, border-box',
                backgroundClip: 'padding-box, border-box',
                border: '2px solid transparent'
              }}
            >
              <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-3">
                {study.title}
              </h3>
              <p className="font-roboto text-lg text-text-primary mb-4 leading-relaxed">
                {study.description}
              </p>
              <div className="border-t-2 border-white/50 pt-4">
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

        <div className="mt-16 text-center relative overflow-hidden py-12">
          <div className="absolute inset-0 pointer-events-none z-0">
            <img
              src="/image1 copy.png"
              alt=""
              className="absolute top-0 left-8 w-64 h-64 object-cover rounded-lg opacity-[0.06] blur-[6px] transform -rotate-6"
              aria-hidden="true"
            />
            <img
              src="/image5 copy.png"
              alt=""
              className="absolute bottom-0 right-12 w-56 h-56 object-cover rounded-lg opacity-[0.07] blur-[5px] transform rotate-3"
              aria-hidden="true"
            />
            <img
              src="/image1.png"
              alt=""
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 object-cover rounded-lg opacity-[0.05] blur-[8px] transform rotate-2"
              aria-hidden="true"
            />
          </div>
          <div className="relative z-10">
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
      </div>
    </section>
  );
}
