import React from 'react';
import styles from './Button.module.css';

const Button = ({children, color, clicked}) => (
    <button className={[styles.button, styles[color]].join(' ')} onClick={clicked}>
        {children}
    </button>
);

export default Button;