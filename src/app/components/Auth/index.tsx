'use client';
import React, { useState, ReactNode } from 'react';
import { Input, InputProps } from '@/components/ui/input';
import { Button, ButtonProps } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { withLabelAndInput } from '@/app/components/Common/LabelInput';

export const EmailInput = withLabelAndInput((props: InputProps) => (
  <Input type="email" placeholder="Email" required {...props} />
));

export const PasswordInput = withLabelAndInput((props: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        required
        onClickIcon={() => setShowPassword(!showPassword)}
        icon={
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="h-4 w-4 text-custom-blue"
          />
        }
        {...props}
      />
    </div>
  );
});

interface FormWrapperProps {
  children: ReactNode;
  title: string;
  footer?: ReactNode;
}

export const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  title,
  footer,
}) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-[60px]">
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-left">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="">{children}</CardContent>
    </Card>
    {footer && (
      <AuthFooter>
        <div className="py-6">{footer}</div>
      </AuthFooter>
    )}
  </div>
);

interface AuthButtonProps extends ButtonProps {
  children: ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    {...props}
    className={`w-full bg-custom-blue hover:bg-custom-blue/80 font-semibold mt-8 ${props.className}`}
    type="submit"
  >
    {children}
  </Button>
);

interface AuthFooterTextProps {
  children: ReactNode;
}

export const AuthFooterText: React.FC<AuthFooterTextProps> = ({ children }) => (
  <p className="text-sm text-custom-gray">{children}</p>
);

interface AuthFooterProps {
  children: ReactNode;
}

export const AuthFooter: React.FC<AuthFooterProps> = ({ children }) => (
  <CardFooter className="flex flex-col items-center space-y-4">
    {children}
  </CardFooter>
);
