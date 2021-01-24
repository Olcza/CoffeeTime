import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import styles from './Layout.module.css';

const Layout = ({children}) => {
    return(
        <div className={styles.layout}>
            <Toolbar/>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;