import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Send, CheckCircle } from 'lucide-react';
import { subscribeToNewsletter } from '../lib/supabase';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      await subscribeToNewsletter({ email });
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err: any) {
      if (err.code === '23505') {
        setError('This email is already subscribed.');
      } else {
        setError('Failed to subscribe. Please try again.');
      }
      console.error('Newsletter subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-text-primary text-seashell py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="mb-6 flex justify-center md:justify-start">
              <img src="/AC-MEDIA_LOGO_WHITE.png" alt="AC Media" className="h-14" />
            </div>
            <p className="font-roboto text-seashell/80 leading-relaxed mb-6">
              Fractional Chief Communications Officer services for organizations that need executive-level strategy and execution—without the full-time overhead.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brick-red hover:text-seashell transition-colors"
            >
              <Linkedin size={24} />
              <span className="font-roboto-condensed font-semibold">Connect on LinkedIn</span>
            </a>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-roboto-condensed font-bold text-xl text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="font-roboto text-seashell/80 hover:text-brick-red transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/partner"
                  className="font-roboto text-seashell/80 hover:text-brick-red transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="font-roboto text-seashell/80 hover:text-brick-red transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="font-roboto text-seashell/80 hover:text-brick-red transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="font-roboto text-seashell/80 hover:text-brick-red transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="font-roboto text-seashell/80 hover:text-brick-red transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-roboto-condensed font-bold text-xl text-white mb-6">
              Stay Connected
            </h3>
            <p className="font-roboto text-seashell/80 mb-4">
              Get insights, resources, and updates on strategic communications delivered to your inbox.
            </p>

            {isSuccess && (
              <div className="bg-green-500/20 border-2 border-green-500 rounded-lg p-3 mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-400" size={20} />
                <p className="font-roboto text-sm text-green-400">
                  Successfully subscribed!
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2 rounded-lg bg-seashell text-text-primary border-2 border-transparent focus:border-brick-red focus:outline-none font-roboto"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-brick-red text-white px-4 py-2 rounded-lg hover:bg-white hover:text-brick-red transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </form>

            {error && (
              <p className="font-roboto text-sm text-red-400 mt-2">{error}</p>
            )}
          </div>
        </div>

        <div className="border-t-2 border-seashell/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-roboto text-seashell/80 mb-1">
                <span className="font-roboto-condensed font-semibold text-white">AC Media</span> | Philadelphia, PA
              </p>
              <p className="font-roboto text-seashell/60 text-sm">
                Serving organizations nationwide
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="font-roboto text-seashell/60 text-sm">
                © {new Date().getFullYear()} AC Media. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
