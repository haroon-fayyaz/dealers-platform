import Link from 'next/link';
import React from 'react';

export const CustomLink = ({ href, children }) => (
  <Link
    href={href}
    className="text-sm text-custom-blue hover:underline font-semibold"
  >
    {children}
  </Link>
);
