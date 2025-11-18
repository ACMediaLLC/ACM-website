import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap: { [key: string]: string } = {
    services: 'Services',
    partner: 'Partner With Us',
    about: 'About',
    testimonials: 'Testimonials',
    resources: 'Resources',
    contact: 'Contact',
  };

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="bg-seashell py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-neutral hover:text-brick-red transition-colors font-roboto"
            >
              Home
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNameMap[pathname] || pathname;

            return (
              <li key={pathname} className="flex items-center space-x-2">
                <ChevronRight size={16} className="text-neutral" />
                {isLast ? (
                  <span className="text-text-primary font-roboto-condensed font-semibold">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-neutral hover:text-brick-red transition-colors font-roboto"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
