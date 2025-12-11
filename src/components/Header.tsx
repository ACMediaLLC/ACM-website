import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-brick-red z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="cursor-pointer">
            <img src="/AC-MEDIA_LOGO_WHITE.png" alt="AC Media" className="h-12" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-roboto-condensed font-semibold transition-colors ${
                isActive('/') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`font-roboto-condensed font-semibold transition-colors ${
                isActive('/services') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link
              to="/work"
              className={`font-roboto-condensed font-semibold transition-colors ${
                isActive('/work') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Work
            </Link>
            <Link
              to="/about"
              className={`font-roboto-condensed font-semibold transition-colors ${
                isActive('/about') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className={`font-roboto-condensed font-semibold transition-colors ${
                isActive('/testimonials') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/resources"
              className={`font-roboto-condensed font-semibold transition-colors ${
                isActive('/resources') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/news"
              className={`font-roboto-condensed font-semibold transition-colors ${
                isActive('/news') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              AC Media in the News
            </Link>
            <Link
              to="/contact"
              className="bg-onyx text-white px-6 py-2 rounded font-roboto-condensed font-semibold hover:bg-black transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brick-red border-t border-white/20">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              to="/"
              onClick={closeMenu}
              className={`font-roboto-condensed font-semibold transition-colors text-left ${
                isActive('/') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className={`font-roboto-condensed font-semibold transition-colors text-left ${
                isActive('/services') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link
              to="/work"
              onClick={closeMenu}
              className={`font-roboto-condensed font-semibold transition-colors text-left ${
                isActive('/work') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Work
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`font-roboto-condensed font-semibold transition-colors text-left ${
                isActive('/about') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              onClick={closeMenu}
              className={`font-roboto-condensed font-semibold transition-colors text-left ${
                isActive('/testimonials') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Testimonials
            </Link>
            <Link
              to="/resources"
              onClick={closeMenu}
              className={`font-roboto-condensed font-semibold transition-colors text-left ${
                isActive('/resources') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              Resources
            </Link>
            <Link
              to="/news"
              onClick={closeMenu}
              className={`font-roboto-condensed font-semibold transition-colors text-left ${
                isActive('/news') ? 'text-white underline' : 'text-white/90 hover:text-white'
              }`}
            >
              AC Media in the News
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="bg-onyx text-white px-6 py-2 rounded font-roboto-condensed font-semibold hover:bg-black transition-colors text-center"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
