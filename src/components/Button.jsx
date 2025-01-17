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
            className={`px-4 py-2 rounded-lg bg-accentGreen text-white hover:bg-accentBrown transition-colors duration-200 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}