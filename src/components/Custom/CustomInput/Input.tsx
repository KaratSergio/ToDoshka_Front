import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, ...props }, ref) => {
  return (
    <div className="flex flex-col w-full items-center">
      <input
        className="p-4 border-2 h-[49px] rounded-lg w-full"
        autoComplete="off"
        ref={ref}
        {...props}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
});

export default Input;
