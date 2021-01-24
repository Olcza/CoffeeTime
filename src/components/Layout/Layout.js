import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Intro from '../Intro/Intro';
import styles from './Layout.module.css';
import ProductList from '../ProductList/ProductList';

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