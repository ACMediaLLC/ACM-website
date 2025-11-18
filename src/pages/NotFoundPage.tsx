import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  useEffect(() => {
    document.title = '404 - Page Not Found | AC Media';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-seashell">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-roboto-condensed font-bold text-9xl text-brick-red mb-6">
          404
        </h1>
        <h2 className="font-roboto-condensed font-bold text-4xl md:text-5xl text-brick-red mb-6">
          Page Not Found
        </h2>
        <p className="font-roboto text-xl text-neutral mb-10 leading-relaxed">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="bg-brick-red text-white px-8 py-4 rounded-lg font-roboto-condensed font-bold text-lg hover:bg-onyx transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="text-brick-red font-roboto-condensed font-semibold text-lg hover:text-onyx transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-16 bg-white rounded-lg p-8 border-2 border-brick-red/20">
          <h3 className="font-roboto-condensed font-bold text-2xl text-brick-red mb-4">
            Quick Links
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              to="/services"
              className="text-brick-red font-roboto-condensed font-semibold hover:text-onyx transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-brick-red font-roboto-condensed font-semibold hover:text-onyx transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-brick-red font-roboto-condensed font-semibold hover:text-onyx transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/partner"
              className="text-brick-red font-roboto-condensed font-semibold hover:text-onyx transition-colors"
            >
              Partner With Us
            </Link>
            <Link
              to="/testimonials"
              className="text-brick-red font-roboto-condensed font-semibold hover:text-onyx transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/resources"
              className="text-brick-red font-roboto-condensed font-semibold hover:text-onyx transition-colors"
            >
              Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
