import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackMetaPageView } from '../../lib/analytics';

export default function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    trackMetaPageView();
  }, [location.pathname, location.search]);

  return null;
}
