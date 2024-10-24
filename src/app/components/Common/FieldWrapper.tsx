import React, { ReactNode } from 'react';

export const FieldWrapper = ({
  children,
  wrapperClassName = '',
}: {
  children: ReactNode;
  wrapperClassName?: string;
}) => <div className={`space-y-2 ${wrapperClassName}`.trim()}>{children}</div>;

export const FieldContainer = ({
  children,
  wrapperClassName = '',
}: {
  children: ReactNode;
  wrapperClassName?: string;
}) => <div className={`mt-5 ${wrapperClassName}`.trim()}>{children}</div>;
