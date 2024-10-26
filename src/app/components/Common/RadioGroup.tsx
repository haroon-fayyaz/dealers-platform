import React from 'react';
import { RadioGroup } from '@/components/ui/radio-group';
import { CustomLabel } from './LabelInput';
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import { RadioGroupItemProps } from '@radix-ui/react-radio-group';

export const CustomRadioGroup = (props: RadioGroupProps) => (
  <RadioGroup className="space-y-0" {...props} />
);

interface WithLabelAndRadioGroupItemProps extends RadioGroupItemProps {
  label: string;
  isRequired?: boolean;
  optionHint?: string;
  wrapperClassName?: string;
  labelProps?: Record<string, unknown>;
}

export const withLabelAndRadioGroupItem = (
  Component: React.ComponentType<RadioGroupItemProps>
) => {
  const WrappedComponent: React.FC<WithLabelAndRadioGroupItemProps> = ({
    label,
    isRequired = false,
    optionHint = '',
    wrapperClassName = '',
    labelProps = {},
    ...props
  }) => (
    <div className={`flex items-center space-x-2 ${wrapperClassName}`.trim()}>
      <Component {...props} />
      <span className="space-x-1">
        <CustomLabel label={label} isRequired={isRequired} {...labelProps} />
        {optionHint && (
          <span className="text-gray-500 text-sm">{optionHint}</span>
        )}
      </span>
    </div>
  );
  WrappedComponent.displayName = `withRadioGroupItem(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};
