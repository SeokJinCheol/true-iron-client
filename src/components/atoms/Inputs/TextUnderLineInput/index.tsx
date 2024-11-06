import React from 'react';
import './_style.css'

const TextUnderLineInput:React.FC = () => {
    return (
        <div className="input-container">
            <input type="text" id="input" required={true}/>
            <label htmlFor="input" className="label">Enter Text</label>
            <div className="underline"></div>
        </div>
    )
}

export default TextUnderLineInput;