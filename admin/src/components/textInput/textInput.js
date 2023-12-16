import React from 'react';
import './textInput.css';

const TextInput = ({ id, title, isSecure, required, name, onChange }) => {
    return (
        <div className="Input-Container">
            <input id={id} className="Text-Input" name={name} required={required} onChange={onChange} type={isSecure ? "password" : "text"} />
            <label htmlFor={id}>{title}</label>
        </div>
    );
}

export default TextInput;