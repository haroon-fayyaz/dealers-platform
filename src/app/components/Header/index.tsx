'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-primary text-primary-foreground px-4">
      <div className="container flex justify-between items-center">
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
