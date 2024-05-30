import React from "react";

const CardComponent = ({ children, maxWidth }) => {
    const widhts = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        '4xl': 'max-w-4xl',
        '5xl': 'max-w-5xl'
    }
    return (
        <div className={`bg-white shadow-md rounded-lg p-4 md:p-8 ${widhts[maxWidth]} mx-auto relative z-0`}>
            {children}
        </div>
    );
};

export default CardComponent;