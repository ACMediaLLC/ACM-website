import { Calendar, ArrowRight } from 'lucide-react';

export function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brick-red text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-roboto-condensed font-bold text-4xl md:text-6xl mb-6 leading-tight">
          Stop Waiting for Bandwidth.
          <br />
          Start Leading with Clarity.
        </h2>

        <p className="font-roboto text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
          You don't need another task manager or content creator. You need a strategic communications partner who can lead, advise, and execute—without the overhead of a full-time hire.
        </p>

        <button
          onClick={scrollToContact}
          className="bg-white text-brick-red px-10 py-5 rounded-lg font-roboto-condensed font-bold text-xl hover:bg-seashell transition-all transform hover:scale-105 flex items-center gap-3 mx-auto shadow-xl mb-8"
        >
          <Calendar size={24} />
          Book a Strategy Call
          <ArrowRight size={24} />
        </button>

        <p className="font-roboto italic text-2xl">
          Fractional firepower. Full-time impact.
        </p>

        <div className="mt-16 pt-16 border-t-2 border-white/20">
          <p className="font-roboto-condensed font-semibold text-xl mb-6">
            Whether you're:
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="font-roboto leading-relaxed">
                A CEO or Executive Director ready to elevate your communications strategy
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="font-roboto leading-relaxed">
                A growing organization that needs leadership without the full-time commitment
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <p className="font-roboto leading-relaxed">
                A team in transition looking for strategic guidance and execution support
              </p>
            </div>
          </div>
          <p className="font-roboto text-xl mt-8">
            Let's talk about how AC Media can help you move forward.
          </p>
        </div>
      </div>
    </section>
  );
}
