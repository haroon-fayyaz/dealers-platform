'use client';

import AuthWrapper from '@/app/components/AuthWrapper';
import { ComponentType } from 'react';

const withAuth = <P extends object>(
  Component: ComponentType<P>,
  isProtected = true
) => {
  const AuthComponent: React.FC<P> = (props) => {
    return (
      <AuthWrapper isProtected={isProtected}>
        <Component {...props} />
      </AuthWrapper>
    );
  };

  return AuthComponent;
};

export default withAuth;
