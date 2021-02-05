import React from 'react';
import styles from './NavItem.module.css';

const NavItem = ({children, clicked, isOpen}) => {
    const openClassName = isOpen ? 'open' : null;
    
    return(
        <li onClick={clicked} className={[styles.navItem, styles[openClassName]].join(' ')} > 
            {children} 
        </li>
    )
}

export default NavItem;