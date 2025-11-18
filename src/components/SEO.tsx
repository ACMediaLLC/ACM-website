import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    let metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (!metaOgTitle) {
      metaOgTitle = document.createElement('meta');
      metaOgTitle.setAttribute('property', 'og:title');
      document.head.appendChild(metaOgTitle);
    }
    metaOgTitle.setAttribute('content', title);

    let metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (!metaOgDescription) {
      metaOgDescription = document.createElement('meta');
      metaOgDescription.setAttribute('property', 'og:description');
      document.head.appendChild(metaOgDescription);
    }
    metaOgDescription.setAttribute('content', description);

    let metaOgUrl = document.querySelector('meta[property="og:url"]');
    if (!metaOgUrl) {
      metaOgUrl = document.createElement('meta');
      metaOgUrl.setAttribute('property', 'og:url');
      document.head.appendChild(metaOgUrl);
    }
    metaOgUrl.setAttribute('content', window.location.href);
  }, [title, description, location]);

  return null;
}
