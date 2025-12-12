import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Quote, Send, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { LogoCarousel } from '../components/LogoCarousel';

const testimonials = [
  {
    quote: "You have built a Communications team that has done amazing work and set the bar high for others to follow and build upon it.",
    author: "Executive Director, Education Nonprofit"
  },
  {
    quote: "The wild publicity stunt you did for us shows the joy, fun, strength, and genuineness you approach everything with. Thank you for all of the ways you challenged us and made us better.",
    author: "Managing Director of Development, Education Nonprofit"
  },
  {
    quote: "You ask all the right questions, lead with your head and heart, and get to the best answers for the whole org.",
    author: "Former Colleague"
  },
  {
    quote: "Thank you for all that you have done to innovate, build, and grow, all that is communications and marketing at our organization.",
    author: "Former Colleague"
  },
  {
    quote: "Seriously, thank you for bringing new ideas to the table, breaking up the monotony, and taking this work seriously.",
    author: "Former Colleague"
  },
  {
    quote: "You've done such amazing work with our organization and seriously have changed EVERYTHING when it comes to comms and external relations at our site.",
    author: "Former Colleague"
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
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              Praise for Andrea & AC Media
            </h1>
            <p className="font-roboto text-xl text-neutral max-w-3xl mx-auto">
              Endorsements from clients, colleagues, and collaborators who’ve experienced my communications leadership firsthand across organizations, campaigns, and causes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
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
                className="bg-seashell p-8 rounded-xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:scale-[1.01] relative shadow-md hover:shadow-2xl"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LogoCarousel />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 25px rgba(232, 93, 111, 0.4))'}}>
            Ready to Become the Next Success Story?
          </h2>
          <p className="font-roboto text-xl text-neutral mb-10 leading-relaxed">
            Let's discuss how AC Media can help elevate your communications strategy
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105"
            style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.4), 0 4px 6px -2px rgba(232, 93, 111, 0.3), 0 0 30px rgba(232, 93, 111, 0.3)'}}
          >
            <Send size={20} />
            Request Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
