import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const NavItems = ({cartClicked}) => (
    <ul className={styles.navItems}>
        <NavItem clicked={cartClicked}>Cart(0)</NavItem>
        <NavItem>My orders</NavItem>
        <NavItem>Login</NavItem>
    </ul>
);

export default NavItems;