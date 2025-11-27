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

          <div className="max-w-4xl mx-auto space-y-6">
            {newsArticles.map((article, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1"
                style={{
                  backgroundImage:
                    'linear-gradient(white, white), linear-gradient(135deg, rgba(232, 93, 111, 0.3), rgba(244, 152, 165, 0.15))',
                  backgroundOrigin: 'padding-box, border-box',
                  backgroundClip: 'padding-box, border-box',
                  border: '2px solid transparent',
                }}
              >
                <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
                  <div className="flex items-center justify-center w-32 h-16 mx-auto md:mx-0 md:mr-6 flex-shrink-0">
                    <img
                      src={article.logo}
                      alt={article.outlet}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <p className="font-roboto-condensed font-semibold text-sm uppercase tracking-wide text-neutral mb-2">
                      {article.outlet}
                    </p>
                    <h3 className="font-roboto-condensed font-bold text-xl text-brick-red mb-3">
                      {article.title}
                    </h3>
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-roboto-condensed font-semibold text-brick-red hover:text-onyx transition-colors"
                    >
                      Read article
                      <ExternalLink size={16} />
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
