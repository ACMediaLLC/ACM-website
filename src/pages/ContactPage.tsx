import { useEffect, useState } from 'react';
import { Mail, User, Building, MessageSquare, Send, CheckCircle, Globe, Info } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    companyWebsite: '',
    howDidYouHear: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Contact | AC Media';
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://hook.us2.make.com/xlhutus72uabwj9qptiivm8r5e3li7fj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', companyName: '', companyWebsite: '', howDidYouHear: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Contact form error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
              Let's Work Together
            </h1>
            <p className="font-roboto-condensed font-semibold text-center text-2xl text-primary mb-4">
              Get in touch to discuss how AC Media can support your organization.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <h2 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-6 text-center">
              Get in Touch
            </h2>

            {isSuccess && (
              <div className="bg-green-500/10 border-2 border-green-500 rounded-lg p-4 mb-6 flex items-center gap-3">
                <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                <div>
                  <p className="font-roboto-condensed font-semibold text-green-700">
                    Message sent successfully!
                  </p>
                  <p className="font-roboto text-sm text-green-600">
                    I'll get back to you within 24-48 hours.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border-2 border-red-500 rounded-lg p-4 mb-6">
                <p className="font-roboto text-red-700">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Andrea Carter"
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" size={20} />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your Company Name (optional)"
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                    Company Website
                  </label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" size={20} />
                    <input
                      type="text"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="example.com (optional)"
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                    How did you hear about AC Media? *
                  </label>
                  <div className="relative">
                    <Info className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral" size={20} />
                    <input
                      type="text"
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      required
                      placeholder="How did you hear about us?"
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-roboto-condensed font-semibold text-text-primary block mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-neutral" size={20} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your organization and what you're looking for..."
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral/20 rounded-lg focus:border-brick-red focus:outline-none font-roboto resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
            </form>

            <div className="mt-12">
              <div className="bg-seashell p-8 rounded-lg border-2 border-brick-red">
                <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-4 text-center">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-brick-red mt-1">•</span>
                    <p className="font-roboto text-neutral leading-relaxed">
                      <span className="font-semibold text-text-primary">Quick Response:</span> I typically reply within 24-48 hours
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brick-red mt-1">•</span>
                    <p className="font-roboto text-neutral leading-relaxed">
                      <span className="font-semibold text-text-primary">No-Cost Consultation:</span> We'll discuss your needs and explore if we're a good fit
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brick-red mt-1">•</span>
                    <p className="font-roboto text-neutral leading-relaxed">
                      <span className="font-semibold text-text-primary">Custom Solutions:</span> Every organization is unique, and I'll tailor my approach to your goals
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
