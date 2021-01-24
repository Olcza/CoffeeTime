import React from 'react';
import styles from './NavItem.module.css';

const NavItem = ({children, clicked}) => (
    <li onClick={clicked} className={styles.navItem} > 
        {children} 
    </li>
)

export default NavItem;