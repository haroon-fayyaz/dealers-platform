'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AuthWrapperProps {
  children: React.ReactNode;
  isProtected?: boolean;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({
  children,
  isProtected = true,
}) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isProtected && !user) {
      router.push('/login');
    } else if (!isProtected && user) {
      router.push('/dashboard');
    }
  }, [user, router, isProtected]);

  if (isProtected && !user) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AuthWrapper;
