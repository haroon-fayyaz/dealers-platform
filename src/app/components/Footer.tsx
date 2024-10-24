'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { APP_NAME, NON_AUTH_ROUTES } from '@/utils/constants';

export default function Footer() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, [mounted]);

  if (!mounted || NON_AUTH_ROUTES.includes(pathname)) {
    return null;
  }

  return (
    <footer className="bg-white text-gray-600 px-6 py-2">
      <div className="container">
        <p className="text-xs">
          {currentYear} &copy; {APP_NAME}
        </p>
      </div>
    </footer>
  );
}
