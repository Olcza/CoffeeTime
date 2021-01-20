import React from 'react';
import styles from './NavItem.module.css';

const NavItem = ({children}) => (
    <li className={styles.navItem}> {children} </li>
)

export default NavItem;