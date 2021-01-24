import React from 'react';
import {NavLink} from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const NavItems = ({cartClicked}) => (
    <ul className={styles.navItems}>
        <NavItem clicked={cartClicked}>Cart(0)</NavItem>
        <NavLink to="/orders" activeClassName={styles.active}>
            <NavItem>My orders</NavItem>
        </NavLink>
        <NavLink to="/auth" activeClassName={styles.active}>
            <NavItem>Login</NavItem>
        </NavLink>
    </ul>
);

export default NavItems;