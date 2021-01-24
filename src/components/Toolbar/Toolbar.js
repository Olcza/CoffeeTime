import React, { useState } from 'react';
import NavItems from '../Navigation/NavItems/NavItems';
import Logo from '../Logo/Logo';
import MiniCart from '../MiniCart/MiniCart';
import styles from './Toolbar.module.css';

const Toolbar = () => {
    const [miniCartOn, setMiniCartOn] = useState(false);
    
    const cartClickHandler = () => {
        setMiniCartOn(prevState => !prevState);
    }

    const miniCart = miniCartOn ? <MiniCart /> : null;
    return (
        <header className={styles.toolbar}>
            <Logo />
            <nav>
                <NavItems cartClicked={cartClickHandler}/>
            </nav>
            {miniCart}
        </header>
    );
};

export default Toolbar;