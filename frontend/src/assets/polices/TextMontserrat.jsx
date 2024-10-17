import React from 'react'

const TextMontserrat = ({ children, color, fontSize, fontWeight }) => {
    return (
        <p className={`${color} ${fontSize} ${fontWeight} font-montserrat`}>
            {children}
        </p>
    );
};

export default TextMontserrat
