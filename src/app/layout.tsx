import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { AuthProvider } from '@/context/AuthContext';

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  variable: '--font-kumbh-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Car.co.uk',
  description: 'Car.co.uk',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} antialiased bg-gray-100`}>
        <Header />
        <AuthProvider>
          <div className="px-4 min-h-[calc(100vh-var(--header-height,0px))]">
            {children}
          </div>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
