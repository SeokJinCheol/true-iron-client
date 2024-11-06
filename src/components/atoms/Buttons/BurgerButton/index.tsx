import React from 'react';
import './_style.css'

const BurgerButton = () => {
    return (
        <label className="burger" htmlFor="burger">
            <input type="checkbox" id="burger"/>
            <span></span>
            <span></span>
            <span></span>
        </label>
    )
}

export default BurgerButton;