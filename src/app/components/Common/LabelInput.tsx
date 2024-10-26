/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Label } from '@/components/ui/label';
import { FieldContainer, FieldWrapper } from './FieldWrapper';

interface CustomLabelProps {
  label: string | React.ReactNode;
  isRequired?: boolean;
  htmlFor?: string;
  [key: string]: any;
}

export const CustomLabel: React.FC<CustomLabelProps> = ({
  label,
  isRequired = false,
  ...props
}) => (
  <Label {...props}>
    {label}
    {isRequired && <span className="text-red-500">*</span>}
  </Label>
);

type CommonProps = {
  label: string;
  isRequired?: boolean;
  wrapperClassName?: string;
  labelProps?: Record<string, unknown>;
};

export const withLabelAndInput = <T extends React.ComponentType<any>>(
  Component: T
) => {
  type ComponentProps = React.ComponentProps<T>;
  type WrappedComponentProps = ComponentProps & CommonProps & { id?: string };

  const WrappedComponent: React.FC<WrappedComponentProps> = ({
    label,
    id,
    isRequired = false,
    wrapperClassName = '',
    labelProps = {},
    ...props
  }) => {
    const inputId =
      id || (props as any).name || label?.toLowerCase().replace(/\s+/g, '_');
    return (
      <FieldContainer wrapperClassName={wrapperClassName}>
        <FieldWrapper>
          <CustomLabel
            htmlFor={inputId}
            label={label}
            isRequired={isRequired}
            {...labelProps}
          />
          {'value' in props ? (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Component {...(props as ComponentProps)} />
          ) : (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <Component id={inputId} {...(props as ComponentProps)} />
          )}
        </FieldWrapper>
      </FieldContainer>
    );
  };

  WrappedComponent.displayName = `withLabelAndInput(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};
