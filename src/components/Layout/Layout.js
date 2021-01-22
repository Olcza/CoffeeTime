import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import Intro from '../Intro/Intro';
import styles from './Layout.module.css';
import ProductList from '../ProductList/ProductList';

const Layout = () => {
    return(
        <div className={styles.layout}>
            <Toolbar/>
            <main>
                <Intro/>
                <ProductList/>
            </main>
        </div>
    );
}

export default Layout;