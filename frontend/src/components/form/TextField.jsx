import React from 'react';

const TextField = ({
    label,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    color = 'text-[#1C1B1F]',
    className = '',
    required = false,
    autoComplete = 'off',
    id,
}) => {
    return (
        <div className={`relative mt-2 w-full ${className}`}>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder=" "
                required={required}
                autoComplete={autoComplete}
                className={`border-1 peer block w-full appearance-none  border border-[#1C1B1F] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-[#1C1B1F] focus:border-[#1C1B1F] focus:outline-none focus:ring-0`}
            />
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
        </div>
    );
};

export default TextField;
