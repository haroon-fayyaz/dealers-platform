'use client';

import React, { useState, useRef, useCallback, KeyboardEvent } from 'react';
import { Input } from '@/components/ui/input';
import { AuthFooterText, FormWrapper } from '@/app/components/Auth';
import {
  FieldContainer,
  FieldWrapper,
} from '@/app/components/Common/FieldWrapper';

export default function OTPCodeEntry() {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const setRef = useCallback((el: HTMLInputElement | null, index: number) => {
    inputRefs.current[index] = el;
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    const newOtp = [
      ...otp.map((d, idx) => (idx === index ? element.value : d)),
    ];
    setOtp(newOtp);

    if (element.value !== '') {
      if (index < 5) {
        inputRefs.current[index + 1]?.focus();
      } else {
        if (newOtp.every((digit) => digit !== '')) {
          validateOtp(newOtp.join(''));
        }
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      if (index > 0 && otp[index] === '') {
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const sendOtp = () => {
    console.log('sendOtp');
  };

  function validateOtp(otp: string) {
    console.log('validateOtp', otp);
  }

  return (
    <FormWrapper
      title="OTP Code"
      footer={
        <AuthFooterText>
          If you didn&apos;t get the code{' '}
          <button
            onClick={sendOtp}
            className="text-sm text-custom-blue hover:underline font-semibold"
          >
            Click Here
          </button>
        </AuthFooterText>
      }
    >
      <FieldContainer wrapperClassName="mt-4">
        <p className="text-sm text-custom-gray">
          Please enter the OTP code we&apos;ve sent to your email.
        </p>
      </FieldContainer>
      <FieldContainer wrapperClassName="mt-8">
        <FieldWrapper wrapperClassName="flex items-baseline space-x-6">
          {otp.map((digit, index) => (
            <Input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => setRef(el, index)}
              className="w-[72px] h-[72px] text-center text-lg font-bold border-2 rounded-lg focus:border-blue-500 focus:ring-blue-500"
            />
          ))}
        </FieldWrapper>
      </FieldContainer>
    </FormWrapper>
  );
}
