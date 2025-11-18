import { ExternalLink } from 'lucide-react';

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
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
            WORK
          </h2>
          <p className="font-roboto text-xl text-neutral max-w-3xl mx-auto">
            From startups to established nonprofits, I partner with organizations ready to elevate their communications strategy and execution
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-seashell p-8 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] text-center shadow-md hover:shadow-2xl"
              style={{
                backgroundImage: 'linear-gradient(#FFF5ED, #FFF5ED), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                backgroundOrigin: 'padding-box, border-box',
                backgroundClip: 'padding-box, border-box',
                border: '2px solid transparent'
              }}
            >
              <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-3">
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
            </div>
          ))}
        </div>

        <div className="border-t-2 border-brick-red/20 pt-16">
          <h3 className="font-roboto-condensed font-bold text-3xl text-brick-red text-center mb-12">
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
                <p className="font-roboto-condensed font-semibold text-text-primary group-hover:text-brick-red transition-colors duration-300">
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
