import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from './button';
import { ErrorHelperText } from '@/app/components/Common/ErrorHelperText';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  onClickIcon?: () => void;
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, onClickIcon, icon, ...props }, ref) => {
    return (
      <div className="relative">
        <div className="relative">
          <input
            type={type}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
            ref={ref}
            {...props}
          />
          {icon && (
            <Button
              type="button"
              onClick={onClickIcon}
              variant="ghost"
              size="icon"
              className="absolute right-3 transform -translate-y-1/2"
              style={{ top: '0px', transform: 'none' }}
            >
              {icon}
            </Button>
          )}
        </div>
        <ErrorHelperText error={error} />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
