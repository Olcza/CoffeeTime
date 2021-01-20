import React from 'react';
import NavItems from '../Navigation/NavItems/NavItems';
import Logo from '../Logo/Logo';
import styles from './Toolbar.module.css';

const Toolbar = () => (
    <header className={styles.toolbar}>
        <Logo />
        <nav>
            <NavItems/>
        </nav>
    </header>
);

export default Toolbar;