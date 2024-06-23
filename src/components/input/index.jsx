import React, { useState } from 'react';
import "../../assets/css/input.css";

export default function Input({ type, label }) {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const handleFocus = () => setFocused(true);
    const handleBlur = () => {
        if (!value) {
            setFocused(false);
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div className={`form-outline ${focused || value ? 'focused' : ''}`}>
            <input
                type={type}
                id="form12"
                className="form-control"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            <label className={`form-label ${focused || value ? 'active' : ''}`} htmlFor="form12">
                {label}
            </label>
        </div>
    );
}
