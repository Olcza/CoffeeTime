import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const NavItems = ({cartClicked, cartItems}) => (
    <ul className={styles.navItems}>
        <NavItem clicked={cartClicked}>Cart({cartItems.length})</NavItem>
        <NavLink to="/orders" activeClassName={styles.active}>
            <NavItem>My orders</NavItem>
        </NavLink>
        <NavLink to="/auth" activeClassName={styles.active}>
            <NavItem>Login</NavItem>
        </NavLink>
    </ul>
);

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(NavItems);