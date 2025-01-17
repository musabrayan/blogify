import React, { useId } from 'react';

const Select = React.forwardRef(function Select({ 
    options, 
    label, 
    className, 
    ...props 
}, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {label && 
                <label 
                    htmlFor={id} 
                    className='inline-block mb-1 pl-1 text-text text-sm sm:text-base font-medium'
                >
                    {label}
                </label>
            }
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-secondaryBg text-text outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full text-sm sm:text-base appearance-none cursor-pointer hover:border-gray-300 focus:border-accent-color-green ${className}`}
            >
                {options?.map((option) => (
                    <option 
                        key={option} 
                        value={option} 
                        className="py-1 sm:py-2"
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;