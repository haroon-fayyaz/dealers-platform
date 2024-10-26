import React from 'react';
import { FieldContainer } from '../Common/FieldWrapper';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

function Step3() {
  return (
    <div className="flex flex-col items-center min-h-[calc(100vh-var(--header-height,0px))] bg-gray-100 pt-[100px]">
      <div className="w-full max-w-2xl p-4 md:p-6 lg:p-8">
        <Card className="w-full">
          <FieldContainer wrapperClassName="text-center">
            <div className="flex flex-col items-center">
              <Image
                src="/images/success.svg"
                alt="success"
                width={100}
                height={100}
              />
              <FieldContainer>
                <p className="font-semibold text-center text-sm lg:text-2xl sm:text-lg">
                  Registration Successfully Completed!
                </p>
              </FieldContainer>
              <FieldContainer>
                <p className="text-center text-xs sm:text-xs lg:text-sm">
                  Thank you for registering on Car.co.uk. Our team will shortly
                  review your request for account verification.
                </p>
              </FieldContainer>
            </div>
          </FieldContainer>
        </Card>
      </div>
    </div>
  );
}

export default Step3;
