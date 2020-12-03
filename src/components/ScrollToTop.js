import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// Auto scrolls to top when loading pages w/ react-router
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
