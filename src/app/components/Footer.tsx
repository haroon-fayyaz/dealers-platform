'use client';

import { APP_NAME } from '@/utils/constants';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-white text-gray-600 px-8 py-2">
      <div className="container">
        <p className="text-xs">
          {currentYear} &copy; {APP_NAME}
        </p>
      </div>
    </footer>
  );
}
