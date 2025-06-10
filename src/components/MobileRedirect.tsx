import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const MobileRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      navigate(window.location.pathname, { replace: true });
    }
  }, [navigate]);

  return null;
};
