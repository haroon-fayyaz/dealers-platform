'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
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

export const EmailInput = withLabelAndInput(({ onChange, ...props }) => (
  <Input
    type="email"
    onChange={onChange}
    placeholder="Email"
    required
    {...props}
  />
));

export const PasswordInput = withLabelAndInput(({ onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        onChange={onChange}
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

export const FormWrapper = ({ children, title, footer }) => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-[60px]">
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="text-3xl font-semibold text-left">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="">{children}</CardContent>
    </Card>
    <AuthFooter>
      <div className="py-6">{footer}</div>
    </AuthFooter>
  </div>
);

export const AuthButton = ({ children, ...props }) => (
  <Button
    {...props}
    className={`w-full bg-custom-blue hover:bg-custom-blue/80 font-semibold mt-8 ${props.className}`}
    type="submit"
  >
    {children}
  </Button>
);

export const AuthFooterText = ({ children }) => (
  <p className="text-sm text-{##272B41}">{children}</p>
);

export const AuthFooter = ({ children }) => (
  <CardFooter className="flex flex-col items-center space-y-4">
    {children}
  </CardFooter>
);
