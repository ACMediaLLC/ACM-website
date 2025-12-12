import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Send, Calendar, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { subscribeToKitOnly } from '../lib/kit';

interface NewsArticle {
  logo: string;
  outlet: string;
  title: string;
  link: string;
}

const newsArticles: NewsArticle[] = [
  {
    logo: '/nonprofitpro.png',
    outlet: 'NonProfit PRO',
    title: 'Diversity Is Not a Dirty Word: A 5-Point Checklist to Survive DEI Messaging',
    link: 'https://www.nonprofitpro.com/post/diversity-is-not-a-dirty-word-a-5-point-checklist-to-survive-dei-messaging/'
  },
  {
    logo: '/generocity.png',
    outlet: 'Generocity',
    title: 'Defining Your Non-Negotiables: A Guide for Social Impact Leaders',
    link: 'https://generocity.org/philly/2025/06/11/defining-your-non-negotiables-a-guide-for-social-impact-leaders/'
  }
];

export function NewsPage() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    document.title = 'AC Media in the News | AC Media';
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const result = await subscribeToKitOnly({ first_name: firstName, email });
      setSubmitMessage(result.message);

      if (result.success) {
        setFirstName('');
        setEmail('');
      }
    } catch (error: any) {
      setSubmitMessage('An error occurred. Please try again.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              AC Media in the News
            </h1>
            <p className="font-roboto-condensed font-semibold text-2xl text-primary">
              Featured insights and thought leadership from AC Media
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {newsArticles.map((article, index) => (
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
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 overflow-hidden"
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(232, 93, 111, 0.15), 0 10px 10px -5px rgba(232, 93, 111, 0.1), 0 0 30px rgba(232, 93, 111, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
                style={{
                  backgroundImage:
                    'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  border: '2px solid transparent',
                }}
              >
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-8 md:p-10 border-b md:border-b-0 md:border-r-2 border-gray-100 min-w-[280px]">
                    <div className="w-full max-w-[240px] flex items-center justify-center">
                      <img
                        src={article.logo}
                        alt={article.outlet}
                        className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <p className="font-roboto-condensed font-bold text-xs uppercase tracking-widest text-neutral mb-3">
                      {article.outlet}
                    </p>
                    <h3 className="font-roboto-condensed font-bold text-2xl md:text-3xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4 leading-tight" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
                      {article.title}
                    </h3>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-roboto-condensed font-semibold text-base bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent hover:from-onyx hover:to-black transition-all group"
                    >
                      Read article
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-onyx text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-black transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Send size={20} />
                Request a No-Cost Intro Call
              </Link>

              <Link
                to="/resources"
                className="text-onyx bg-white px-6 py-3 rounded-lg font-roboto-condensed font-semibold text-lg hover:bg-seashell transition-colors flex items-center gap-2 shadow-md"
              >
                <BookOpen size={20} />
                Explore My Free Resources
              </Link>
            </div>

            <div className="mt-8 w-full max-w-md">
              <h3 className="font-roboto-condensed font-bold text-xl text-black mb-4 text-center">Subscribe to Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-roboto text-black placeholder-gray-400 focus:outline-none focus:border-brick-red transition-colors"
                />
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg font-roboto text-black placeholder-gray-400 focus:outline-none focus:border-brick-red transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-brick-red to-rose-500 text-white px-6 py-3 rounded-lg font-roboto-condensed font-semibold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105 whitespace-nowrap"
                    style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.3), 0 4px 6px -2px rgba(232, 93, 111, 0.2), 0 0 20px rgba(232, 93, 111, 0.25)'}}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
              </form>
              {submitMessage && (
                <p className="font-roboto-condensed text-sm text-black mt-2 text-center">{submitMessage}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
