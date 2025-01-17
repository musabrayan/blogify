import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && (
                <label 
                    className='inline-block mb-1 pl-1 text-text text-sm md:text-base font-medium' 
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg text-sm md:text-base min-h-[40px] md:min-h-[44px] bg-bg text-secondaryText outline-none focus:bg-secondaryBg duration-200 border border-accentGreen w-full focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 ${className}`}
                id={id}
                ref={ref}
                {...props}
            />
        </div>
    );
});

export default Input;