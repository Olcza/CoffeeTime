import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';
import * as actions from '../../../store/actions/index';

const NavItems = ({cartItems, onToggleMiniCart}) => {
    const cartNavItemClickHandler = () => {
        onToggleMiniCart();
    }

    return(
        <ul className={styles.navItems}>
            <NavItem clicked={cartNavItemClickHandler}>Cart({cartItems.length})</NavItem>
            <NavLink to="/orders" activeClassName={styles.active}>
                <NavItem>My orders</NavItem>
            </NavLink>
            <NavLink to="/auth" activeClassName={styles.active}>
                <NavItem>Login</NavItem>
            </NavLink>
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleMiniCart: () => dispatch(actions.toggleMiniCart()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavItems);