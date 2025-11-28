import { ArrowRight, Calendar, BookOpen } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-seashell">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
          <h1 className="font-roboto-condensed font-bold text-5xl md:text-6xl lg:text-7xl text-text-primary mb-6 leading-tight">
            Get a Chief Communications Officer—
            <span className="bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent"> Without the $200K Price Tag</span>
          </h1>

          <p className="font-roboto text-xl md:text-2xl text-neutral mb-8 leading-relaxed">
            Stop piecing together your marketing and communications strategy. Get executive-level leadership, clarity, and execution—without the overhead.
          </p>

          <div className="bg-white border-2 border-brick-red rounded-lg p-6 mb-10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-brick-red rounded-full blur-3xl opacity-40"></div>
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

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              See How It Works
              <ArrowRight size={20} />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="bg-white text-brick-red border-2 border-brick-red px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-brick-red hover:text-white transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Calendar size={20} />
              Book a No-Cost Intro Call
            </button>
          </div>

          <button
            onClick={() => scrollToSection('resources')}
            className="text-onyx font-roboto-condensed font-semibold text-lg hover:text-brick-red transition-colors flex items-center gap-2 mx-auto"
          >
            <BookOpen size={20} />
            Explore My Free Resources
          </button>

          <p className="font-roboto italic text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mt-12">
            Skip the overhead. Keep the excellence.
          </p>
        </div>

        <div className="hidden lg:flex lg:items-center lg:justify-center">
          <div className="w-full max-w-lg mx-auto">
            <img
              src="/Favorite 1.jpg"
              alt="AC Media Communications Strategy"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
