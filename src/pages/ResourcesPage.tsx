import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Calendar, Mail, CheckCircle, Eye, X } from 'lucide-react';
import { subscribeToKitOnly } from '../lib/kit';

interface Resource {
  id: string;
  title: string;
  description: string;
  file_url: string;
  cover_image_url?: string;
}

const RESOURCES: Resource[] = [
  {
    id: '1',
    title: '5 Power Moves to Make Your Brand Unforgettable',
    description: 'A no-nonsense checklist for organizations who want to level-up their brand visibility today. Learn how to create buzzworthy moments, get the right people talking about you, and build relationships that matter.',
    file_url: '/resources/brand-moves.pdf',
    cover_image_url: '/5PowerMoves copy.webp'
  },
  {
    id: '2',
    title: 'Diversity Is Not a Dirty Word',
    description: 'A strategic to-do list for navigating DEI messaging and positioning in today\'s complex environment. Practical guidance on auditing foundations, crafting compelling messages, and leading with authenticity.',
    file_url: '/resources/diversity-guide.pdf',
    cover_image_url: '/DiversityIsNotaDirtyWord copy.webp'
  }
];

export function ResourcesPage() {
  const [resources] = useState<Resource[]>(RESOURCES);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Resources | AC Media';
  }, []);


  const handlePreviewClick = (resource: Resource) => {
    setSelectedResource(resource);
    setShowPreviewModal(true);
  };

  const handleDownloadClick = (resource: Resource) => {
    setSelectedResource(resource);
    setShowPreviewModal(false);
    setShowEmailModal(true);
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await subscribeToKitOnly({ first_name: firstName, email });

      if (result.success) {
        setIsSuccess(true);
        setFirstName('');
        setEmail('');

        if (selectedResource) {
          window.open(selectedResource.file_url, '_blank');
        }

        setTimeout(() => {
          setShowEmailModal(false);
          setIsSuccess(false);
          setSelectedResource(null);
        }, 2000);
      }
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
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 20px rgba(232, 93, 111, 0.3))'}}>
              Free Resources
            </h1>
            
            <p className="font-roboto-condensed font-semibold text-center text-2xl text-primary mb-4">
              Steal my frameworks, templates, and toolkits to level up your communications strategies
            </p>
          </div>

          {resources.length === 0 && (
            <div className="bg-seashell rounded-lg p-12 text-center">
              <FileText className="text-brick-red mx-auto mb-4" size={64} />
              <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
                Coming Soon
              </h3>
              <ul className="space-y-2 list-disc text-lg text-onyx mb-6 marker:text-brick-red ml-6 text-left">
  <li>The CEO's MarCom Playbook: A Quick-and-Dirty Guide to Ensuring Marketing & Communications Operate as a Strategic Powerhouse for Growth</li>
  <li>Overloaded Messaging: The Clarity to Impact Framework</li>
  <li>Why FAQs are Your Secret Weapon for Internal Change Management Communications</li>
  <li>Toolkit: Internal Change Management Communications</li>
</ul>
              <p className="font-roboto italic text-lg mb-6">
              Subscribe to the AC Media newsletter for your weekly dose of free MarCom strategies and best practices
            </p>

      <Link
                to="/contact"
                className="inline-flex bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105"
                style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.3), 0 4px 6px -2px rgba(232, 93, 111, 0.2), 0 0 20px rgba(232, 93, 111, 0.25)'}}
              >
                Get Notified
              </Link>
            </div>
          )}

          {resources.length > 0 && (
            <>
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                  {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-seashell rounded-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-brick-red overflow-hidden"
                  >
                    <div className="aspect-[4/5] md:aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-brick-red/10 to-rose-500/10">
                      <iframe
                        src={`${resource.file_url}#toolbar=0&navpanes=0`}
                        className="hidden md:block w-full h-full pointer-events-none"
                        title={`Preview of ${resource.title}`}
                      />
                      {resource.cover_image_url && (
                        <img
                          src={resource.cover_image_url}
                          alt={resource.title}
                          className="md:hidden w-full h-full object-cover"
                        />
                      )}
                      {!resource.cover_image_url && (
                        <div className="md:hidden absolute inset-0 flex items-center justify-center">
                          <FileText className="text-brick-red" size={80} strokeWidth={1.5} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="p-6 md:p-8">
                      <h3 className="font-roboto-condensed font-bold text-xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-3" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
                        {resource.title}
                      </h3>

                      <p className="font-roboto text-sm md:text-base text-neutral mb-6 leading-relaxed">
                        {resource.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          onClick={() => handlePreviewClick(resource)}
                          className="flex-1 bg-white border-2 border-brick-red text-brick-red px-4 md:px-6 py-3 rounded-lg font-roboto-condensed font-semibold hover:bg-brick-red hover:text-white transition-all flex items-center justify-center gap-2 min-h-[48px]"
                        >
                          <Eye size={20} />
                          Preview
                        </button>
                        <button
                          onClick={() => handleDownloadClick(resource)}
                          className="flex-1 bg-brick-red text-white px-4 md:px-6 py-3 rounded-lg font-roboto-condensed font-semibold hover:bg-onyx transition-all flex items-center justify-center gap-2 min-h-[48px]"
                        >
                          <Download size={20} />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {showPreviewModal && selectedResource && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-white rounded-lg w-full max-w-4xl h-[95vh] sm:h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-3 sm:p-4 border-b flex-shrink-0">
              <h3 className="font-roboto-condensed font-bold text-base sm:text-lg md:text-xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent truncate pr-2" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
                {selectedResource.title}
              </h3>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleDownloadClick(selectedResource)}
                  className="bg-brick-red text-white px-3 sm:px-4 md:px-6 py-2 rounded-lg font-roboto-condensed font-semibold hover:bg-onyx transition-all flex items-center gap-2"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">Download</span>
                </button>
                <button
                  onClick={() => {
                    setShowPreviewModal(false);
                    setSelectedResource(null);
                  }}
                  className="text-neutral hover:text-brick-red transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe
                src={`${selectedResource.file_url}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
                className="w-full h-full"
                title={selectedResource.title}
                style={{ border: 'none' }}
              />
            </div>
          </div>
        </div>
      )}

      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            {isSuccess ? (
              <div className="text-center">
                <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-2" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
                  Success!
                </h3>
                <p className="font-roboto text-neutral">
                  Your download is starting...
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-roboto-condensed font-bold text-2xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-4" style={{filter: 'drop-shadow(0 0 15px rgba(232, 93, 111, 0.25))'}}>
                  Get Your Free Resource
                </h3>
                <p className="font-roboto text-neutral mb-6">
                  Enter your email to download "{selectedResource?.title}" and get updates on new resources.
                </p>

                <form onSubmit={handleEmailSubmit}>
                  <div className="mb-4">
                    <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                      required
                      className="w-full px-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto"
                    />
                  </div>

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
                        setFirstName('');
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
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl bg-gradient-to-r from-brick-red to-rose-500 bg-clip-text text-transparent mb-6" style={{filter: 'drop-shadow(0 0 25px rgba(232, 93, 111, 0.4))'}}>
            Need More Than Templates?
          </h2>
          <p className="font-roboto text-xl text-primary mb-10 leading-relaxed">
            If you need strategic guidance or hands-on support, let's talk about how we can work together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex bg-gradient-to-r from-brick-red to-rose-500 text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:from-onyx hover:to-black transition-all transform hover:scale-105"
              style={{boxShadow: '0 10px 15px -3px rgba(232, 93, 111, 0.4), 0 4px 6px -2px rgba(232, 93, 111, 0.3), 0 0 30px rgba(232, 93, 111, 0.3)'}}
            >
              <Calendar size={20} />
              Schedule a Consultation
            </Link>
            <Link
              to="/services"
              className="text-primary font-roboto-condensed font-semibold text-lg hover:bg-gradient-to-r hover:from-brick-red hover:to-rose-500 hover:bg-clip-text hover:text-transparent transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
