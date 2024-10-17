import React from 'react';

export const DropdownField = ({
    label,
    value,
    onChange,
    options = [],
    className = '',
    id,
    color = 'text-[#1C1B1F]',
    required = false,
    svgIcon,
}) => {
    return (
        <div className={`relative mt-2 w-full ${className}`}>
            <select
                id={id}
                value={value}
                onChange={onChange}
                required={required}
                className={`peer block w-full appearance-none border border-[#1C1B1F] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-[#1C1B1F] focus:border-[#1C1B1F] focus:outline-none focus:ring-0`}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <label
                htmlFor={id}
                className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm ${color} duration-300
          peer-placeholder-shown:top-1/2 
          peer-placeholder-shown:-translate-y-1/2 
          peer-placeholder-shown:scale-100 
          peer-focus:top-2 
          peer-focus:-translate-y-4 
          peer-focus:scale-75 
          peer-focus:px-2 
          peer-focus:text-[#1C1B1F]`}
            >
                {label}
            </label>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                {svgIcon}
            </div>
        </div>
    );
};

