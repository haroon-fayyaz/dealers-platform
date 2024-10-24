import Link from 'next/link';
import React from 'react';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-sm text-custom-blue hover:underline font-semibold"
  >
    {children}
  </Link>
);
