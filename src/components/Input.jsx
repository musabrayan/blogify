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
                className={`px-3 py-2 rounded-lg bg-[#F3EAC2] text-[#4A7C59] outline-none focus:bg-[#F5F5DC] duration-200 border border-[#81B29A] w-full ${className}`}
                id={id}
                ref={ref}
                {...props}
            />
        </div>
    );
});

export default Input;