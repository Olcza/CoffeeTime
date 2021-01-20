import React from 'react';
import styles from './Logo.module.css';
import logo_img from '../../assets/coffee-1918552_640.png';

const Logo = () => (
    <div className={styles.logo}>
        <img src={logo_img} alt='logo' />
    </div>
);

export default Logo;