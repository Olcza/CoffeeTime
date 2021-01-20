import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Intro from '../Intro/Intro';
import styles from './Layout.module.css';

const Layout = () => (
    <div className={styles.layout}>
        <Toolbar/>
        <main>
            <Intro/>
        </main>
    </div>
);

export default Layout;