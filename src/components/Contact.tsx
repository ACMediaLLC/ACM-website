import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function Contact() {
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
      setError('Failed to send message. Please try again or email directly.');
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-seashell">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-4">
            Let's Start a Conversation
          </h2>
          <p className="font-roboto text-xl text-neutral">
            Ready to explore how fractional communications leadership can work for your organization?
          </p>
        </div>

        {isSuccess && (
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-8 flex items-center justify-center gap-3">
            <CheckCircle className="text-green-500" size={24} />
            <p className="font-roboto text-green-700">
              Thank you! Your message has been sent. I'll be in touch soon.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 border-2 border-brick-red/20">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block font-roboto-condensed font-semibold text-text-primary mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-onyx/20 rounded-lg focus:border-brick-red focus:outline-none bg-seashell font-roboto"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-roboto-condensed font-semibold text-text-primary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-onyx/20 rounded-lg focus:border-brick-red focus:outline-none bg-seashell font-roboto"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="companyName" className="block font-roboto-condensed font-semibold text-text-primary mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-onyx/20 rounded-lg focus:border-brick-red focus:outline-none bg-seashell font-roboto"
                placeholder="Your company name (optional)"
              />
            </div>

            <div>
              <label htmlFor="companyWebsite" className="block font-roboto-condensed font-semibold text-text-primary mb-2">
                Company Website
              </label>
              <input
                type="url"
                id="companyWebsite"
                name="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-onyx/20 rounded-lg focus:border-brick-red focus:outline-none bg-seashell font-roboto"
                placeholder="https://example.com (optional)"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="howDidYouHear" className="block font-roboto-condensed font-semibold text-text-primary mb-2">
              How did you hear about AC Media? *
            </label>
            <input
              type="text"
              id="howDidYouHear"
              name="howDidYouHear"
              required
              value={formData.howDidYouHear}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-onyx/20 rounded-lg focus:border-brick-red focus:outline-none bg-seashell font-roboto"
              placeholder="How did you hear about us?"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block font-roboto-condensed font-semibold text-text-primary mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border-2 border-onyx/20 rounded-lg focus:border-brick-red focus:outline-none bg-seashell font-roboto resize-none"
              placeholder="Tell me about your organization and what you're looking for..."
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 mb-6 text-center">
              <p className="font-roboto text-red-700">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 text-center">
          <p className="font-roboto text-neutral mb-2">
            Prefer to email directly?
          </p>
          <a
            href="mailto:andrea@acmedia.com"
            className="font-roboto-condensed font-semibold text-xl text-brick-red hover:text-onyx transition-colors"
          >
            andrea@acmedia.com
          </a>
        </div>
      </div>
    </section>
  );
}
