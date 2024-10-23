export const FieldWrapper = ({ children, wrapperClassName = '' }) => (
  <div className={`space-y-2 ${wrapperClassName}`.trim()}>{children}</div>
);

export const FieldContainer = ({ children, wrapperClassName = '' }) => (
  <div className={`mt-5 ${wrapperClassName}`.trim()}>{children}</div>
);
