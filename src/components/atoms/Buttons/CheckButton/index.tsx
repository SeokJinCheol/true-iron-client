import React from 'react';
import './_style.css'

const CheckButton = () => {
    return (
        <label className="container">
            <input checked={true} type="checkbox"/>
            <div className="checkmark"></div>
        </label>
    )
}

export default CheckButton;