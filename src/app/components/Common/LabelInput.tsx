import { Label } from '@/components/ui/label';
import { FieldContainer, FieldWrapper } from './FieldWrapper';

export const CustomLabel = ({ label, isRequired = false, ...props }) => (
  <Label {...props}>
    {label}
    {isRequired && <span className="text-red-500">*</span>}
  </Label>
);

export const withLabelAndInput = (Component) => {
  const WrappedComponent = ({
    label,
    id,
    isRequired = false,
    wrapperClassName = '',
    labelProps = {},
    ...props
  }) => (
    <FieldContainer wrapperClassName={wrapperClassName}>
      <FieldWrapper>
        <CustomLabel label={label} isRequired={isRequired} {...labelProps} />
        <Component id={id} {...props} />
      </FieldWrapper>
    </FieldContainer>
  );
  WrappedComponent.displayName = `withLabelAndInput(${Component.displayName || Component.name || 'Component'})`;
  return WrappedComponent;
};
