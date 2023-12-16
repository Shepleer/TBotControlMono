import React from 'react';
import './primaryButton.css';

const PrimaryButton = ({ title, onClick, ...props} ) => {
    return (
        <button className="Primary-Button" {...props}>
            {title}
        </button>
    );
}

export default PrimaryButton;