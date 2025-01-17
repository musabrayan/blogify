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
                    className='inline-block mb-1 pl-1 text-text' 
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-bg text-secondaryText outline-none focus:bg-secondaryBg duration-200 border border-accentGreen w-full ${className}`}
                id={id}
                ref={ref}
                {...props}
            />
        </div>
    );
});

export default Input;