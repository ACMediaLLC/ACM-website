import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Calendar, Mail, CheckCircle } from 'lucide-react';
import { getResources, subscribeToNewsletter, Resource } from '../lib/supabase';

export function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Resources | AC Media';
    loadResources();
  }, []);

  const loadResources = async () => {
    try {
      const data = await getResources();
      setResources(data);
    } catch (error) {
      console.error('Error loading resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...Array.from(new Set(resources.map(r => r.category)))];

  const filteredResources = selectedCategory === 'All'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  const handleDownloadClick = (resource: Resource) => {
    setSelectedResource(resource);
    setShowEmailModal(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await subscribeToNewsletter({ email });
      setIsSuccess(true);
      setEmail('');

      if (selectedResource) {
        window.open(selectedResource.file_url, '_blank');
      }

      setTimeout(() => {
        setShowEmailModal(false);
        setIsSuccess(false);
        setSelectedResource(null);
      }, 2000);
    } catch (error) {
      console.error('Error subscribing:', error);
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
              Free Resources
            </h1>
            
            <p className="font-roboto-condensed font-semibold text-center text-2xl text-primary mb-4">
              Steal my frameworks, templates, and toolkits to level up your communications strategies
            </p>
          </div>

          {resources.length === 0 && !loading && (
            <div className="bg-seashell rounded-lg p-12 text-center">
              <FileText className="text-brick-red mx-auto mb-4" size={64} />
              <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-4">
                Coming Soon
              </h3>
              <ul className="space-y-2 list-disc text-lg text-onyx mb-6 marker:text-brick-red ml-6 text-left">
  <li>The CEO's MarCom Playbook: A Quick-and-Dirty Guide to Ensuring Marketing & Communications Operate as a Strategic Powerhouse for Growth</li>
  <li>Overloaded Messaging: The Clarity to Impact Framework</li>
  <li>Why FAQs are Your Secret Weapon for Internal Change Management Communications</li>
  <li>Toolkit: Internal Change Management Communications</li>
</ul>
              <p className="font-roboto italic text-2xl">
              Subscribe to the AC Media newsletter for your weekly dose of free MarCom strategies and best practices
            </p>

      <Link
                to="/contact"
                className="inline-flex bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all"
              >
                Get Notified
              </Link>
            </div>
          )}

          {resources.length > 0 && (
            <>
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 rounded-lg font-roboto-condensed font-semibold transition-all ${
                      selectedCategory === category
                        ? 'bg-brick-red text-white'
                        : 'bg-seashell text-text-primary hover:bg-brick-red/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-seashell p-8 rounded-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-brick-red"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="text-brick-red" size={32} />
                      <span className="text-sm font-roboto-condensed font-semibold text-neutral bg-white px-3 py-1 rounded">
                        {resource.category}
                      </span>
                    </div>

                    <h3 className="font-roboto-condensed font-bold text-xl text-brick-red mb-3">
                      {resource.title}
                    </h3>

                    <p className="font-roboto text-neutral mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    <button
                      onClick={() => handleDownloadClick(resource)}
                      className="w-full bg-brick-red text-white px-6 py-3 rounded-lg font-roboto-condensed font-semibold hover:bg-onyx transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      Download Free
                    </button>

                    <p className="text-sm font-roboto text-neutral mt-3 text-center">
                      {resource.download_count} downloads
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            {isSuccess ? (
              <div className="text-center">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-2">
                  Success!
                </h3>
                <p className="font-roboto text-neutral">
                  Your download is starting...
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-4">
                  Get Your Free Resource
                </h3>
                <p className="font-roboto text-neutral mb-6">
                  Enter your email to download "{selectedResource?.title}" and get updates on new resources.
                </p>

                <form onSubmit={handleEmailSubmit}>
                  <div className="mb-4">
                    <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" size={20} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full pl-10 pr-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowEmailModal(false);
                        setSelectedResource(null);
                        setEmail('');
                      }}
                      className="flex-1 bg-neutral/10 text-text-primary px-6 py-3 rounded-lg font-roboto-condensed font-semibold hover:bg-neutral/20 transition-all"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-brick-red text-white px-6 py-3 rounded-lg font-roboto-condensed font-semibold hover:bg-onyx transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Download size={20} />
                      {isSubmitting ? 'Sending...' : 'Download'}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-seashell">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
            Need More Than Templates?
          </h2>
          <p className="font-roboto text-xl text-primary mb-10 leading-relaxed">
            If you need strategic guidance or hands-on support, let's talk about how we can work together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Calendar size={20} />
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="text-primary font-roboto-condensed font-semibold text-lg hover:text-brick-red transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
