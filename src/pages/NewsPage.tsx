import { useEffect, useState } from 'react';
import { ExternalLink, Calendar, Mail } from 'lucide-react';
import { supabase } from '../lib/supabase';

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
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) throw error;

      setSubmitMessage('Thank you for subscribing!');
      setEmail('');
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
              AC Media in the News
            </h1>
            <p className="font-roboto-condensed font-semibold text-2xl text-primary">
              Featured insights and thought leadership from AC Media
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {newsArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1 overflow-hidden"
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
                    <h3 className="font-roboto-condensed font-bold text-2xl md:text-3xl text-brick-red mb-4 leading-tight">
                      {article.title}
                    </h3>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-roboto-condensed font-semibold text-base text-brick-red hover:text-onyx transition-colors group"
                    >
                      Read article
                      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-brick-red to-rose-500 rounded-xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={32} className="flex-shrink-0" />
                <h3 className="font-roboto-condensed font-bold text-3xl">Book a Consultation</h3>
              </div>
              <p className="font-roboto-condensed text-lg mb-6 leading-relaxed">
                Ready to elevate your nonprofit's messaging? Schedule a consultation with our team to discuss your goals.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-brick-red font-roboto-condensed font-bold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Book Now
              </a>
            </div>

            <div className="bg-gradient-to-br from-onyx to-gray-800 rounded-xl p-8 md:p-10 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={32} className="flex-shrink-0" />
                <h3 className="font-roboto-condensed font-bold text-3xl">Stay Informed</h3>
              </div>
              <p className="font-roboto-condensed text-lg mb-6 leading-relaxed">
                Get the latest insights and updates delivered straight to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 rounded-lg text-gray-900 font-roboto-condensed focus:outline-none focus:ring-2 focus:ring-brick-red"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brick-red text-white font-roboto-condensed font-bold py-3 px-8 rounded-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
                </button>
                {submitMessage && (
                  <p className="text-center font-roboto-condensed text-sm">{submitMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
