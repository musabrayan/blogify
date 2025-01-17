import React from "react";

export default function Button({
    children,
    type = "button",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-2 py-1 text-sm sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:text-base rounded-lg bg-accentGreen text-white hover:bg-accentBrown transition-colors duration-200 w-full sm:w-auto ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}