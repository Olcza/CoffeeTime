import React from 'react';
import styles from './Button.module.css';

const Button = ({children, color, clicked, disabled}) => (
    <button className={[styles.button, styles[color]].join(' ')} onClick={clicked} disabled={disabled}>
        {children}
    </button>
);

export default Button;