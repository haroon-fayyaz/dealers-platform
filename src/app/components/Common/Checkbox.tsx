'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { CustomLabel } from './LabelInput';

interface CustomCheckboxProps {
  label: string | React.ReactNode;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
  isRequired?: boolean;
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function CustomCheckbox({
  label,
  initialChecked = false,
  onChange,
  isRequired = false,
  ...props
}: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        {...props}
        id={props.id}
        checked={isChecked}
        onCheckedChange={handleChange}
      />
      <CustomLabel label={label} htmlFor={props.id} isRequired={isRequired} />
    </div>
  );
}

export default CustomCheckbox;
