'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerRef.current) {
      const headerHeight = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty(
        '--header-height',
        `${headerHeight}px`
      );
    }
  }, []);

  return (
    <header
      ref={headerRef}
      className="text-primary-foreground px-6 py-3.5 bg-[#44D260]"
      style={{ height: 'var(--header-height, auto)' }}
    >
      <div className="container flex justify-between items-center h-full">
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={137}
            height={40}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
