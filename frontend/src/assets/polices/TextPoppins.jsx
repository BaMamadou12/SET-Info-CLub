import React from 'react';

const TextPoppins = ({ children, color, fontSize, fontWeight}) => {
    return (
        <p className={`${color} ${fontSize} ${fontWeight} font-poppins`}>
            {children}
        </p>
    );
};

export default TextPoppins;
