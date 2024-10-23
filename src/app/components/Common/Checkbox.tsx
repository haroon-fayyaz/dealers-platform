'use client';

import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { CustomLabel } from './LabelInput';

function CustomCheckbox({
  label,
  initialChecked = false,
  onChange,
  id,
  isRequired,
  ...props
}) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = (checked) => {
    setIsChecked(checked);
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        {...props}
        id={id}
        checked={isChecked}
        onCheckedChange={handleChange}
      />
      <CustomLabel label={label} htmlFor={id} isRequired={isRequired} />
    </div>
  );
}

export default CustomCheckbox;
