import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Calendar } from 'lucide-react';
import { LogoCarousel } from '../components/LogoCarousel';

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
  },
  {
    quote: "Andrea doesn't just check boxes—she transforms how organizations think about and execute their communications strategy.",
    author: "Board Chair, Philadelphia-based Nonprofit"
  },
  {
    quote: "We needed someone who could both think strategically and roll up their sleeves. Andrea was exactly what we were looking for.",
    author: "COO, Mission-Driven Organization"
  }
];

export function TestimonialsPage() {
  useEffect(() => {
    document.title = 'Testimonials | AC Media';
  }, []);

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
              Praise for Andrea & AC Media
            </h1>
            <p className="font-roboto text-xl text-neutral max-w-3xl mx-auto">
              Endorsements from clients, colleagues, and collaborators who’ve experienced my communications leadership firsthand across organizations, campaigns, and causes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-seashell p-8 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] relative shadow-md hover:shadow-2xl"
                style={{
                  backgroundImage: 'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  border: '2px solid transparent'
                }}
              >
                <Quote className="text-brick-red/20 absolute top-4 right-4" size={48} />
                <p className="font-roboto text-lg text-neutral mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                <p className="font-roboto-condensed font-semibold text-onyx">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
            Ready to Become the Next Success Story?
          </h2>
          <p className="font-roboto text-xl text-neutral mb-10 leading-relaxed">
            Let's discuss how AC Media can help elevate your communications strategy
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 items-center gap-2 shadow-lg"
          >
            <Calendar size={20} />
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
