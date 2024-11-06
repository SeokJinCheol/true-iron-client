import React from 'react';

import './_style.css'

export interface ButtonProps {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** Optional click handler */
    onClick?: () => void;
}

const ToggleButton = () => {
    return (
        <label className="toggle-switch">
            <input type="checkbox"/>
            <div className="toggle-switch-background">
                <div className="toggle-switch-handle"></div>
            </div>
        </label>
    )
}

export default ToggleButton;