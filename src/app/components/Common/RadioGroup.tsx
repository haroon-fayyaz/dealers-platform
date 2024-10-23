import { RadioGroup } from '@/components/ui/radio-group';
import { CustomLabel } from './LabelInput';

export const CustomRadioGroup = (props: RadioGroupProps) => (
  <RadioGroup className="space-y-0" {...props} />
);

export const withLabelAndRadioGroupItem = (Component) => {
  const WrappedComponent = ({
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
