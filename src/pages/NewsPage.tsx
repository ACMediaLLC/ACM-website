import { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

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
  useEffect(() => {
    document.title = 'AC Media in the News | AC Media';
  }, []);

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
        </div>
      </section>
    </div>
  );
}
