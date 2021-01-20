import React from 'react';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';

const NavItems = () => (
    <ul className={styles.navItems}>
        <NavItem>Cart(0)</NavItem>
        <NavItem>My orders</NavItem>
        <NavItem>Login</NavItem>
    </ul>
);

export default NavItems;