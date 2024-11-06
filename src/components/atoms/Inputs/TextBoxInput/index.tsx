import React from 'react';
import './_style.css';

const TextBoxInput:React.FC = () => {
    return (
        <div className="group">
            <i className="ri-search-2-line icon"/>
            <input className="input" type="search" placeholder="Search"/>
        </div>
    )
}

export default TextBoxInput;