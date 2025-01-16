import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-accent-color-green",
    textColor = "text-text",
    hoverBgColor = "hover:bg-accent-color-brown", // Default hover background color
    hoverTextColor = "hover:text-white", // Default hover text color
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-lg bg-[#81B29A] text-white hover:bg-[#B08968] transition-colors duration-200 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}