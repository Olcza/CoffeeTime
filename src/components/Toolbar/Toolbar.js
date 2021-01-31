import React from 'react';
import { connect } from 'react-redux';
import NavItems from '../Navigation/NavItems/NavItems';
import Logo from '../Logo/Logo';
import MiniCart from '../MiniCart/MiniCart';
import styles from './Toolbar.module.css';

const Toolbar = ({miniCartOpen}) => {    
    const miniCart = miniCartOpen ? <MiniCart /> : null;
    return (
        <header className={styles.toolbar}>
            <Logo />
            <nav>
                <NavItems/>
            </nav>
            {miniCart}
        </header>
    );
};

const mapStateToProps = state => {
    return {
        miniCartOpen: state.cart.miniCartOpen
    }
}

export default connect(mapStateToProps)(Toolbar);