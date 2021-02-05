import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem/NavItem';
import styles from './NavItems.module.css';
import * as actions from '../../../store/actions/index';

const NavItems = ({cartItems, onToggleMiniCart, isAuth, miniCartOpen}) => {
    const cartNavItemClickHandler = () => {
        onToggleMiniCart();
    }

    const myOrdersLink = 
        isAuth ? 
        <NavLink to="/orders" activeClassName={styles.active}>
            <NavItem>My orders</NavItem>
        </NavLink>
        : null

    const logInOutNavlink = 
        isAuth ?
        <NavLink to="/logout" activeClassName={styles.active}>
            <NavItem>Logout</NavItem>
        </NavLink>
        :
        <NavLink to="/auth" activeClassName={styles.active}>
            <NavItem>Login</NavItem>
        </NavLink>

    return(
        <ul className={styles.navItems}>
            <NavItem clicked={cartNavItemClickHandler} isOpen={miniCartOpen}>Cart({cartItems.length})</NavItem>
            {myOrdersLink}
            {logInOutNavlink}
        </ul>
    );
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        isAuth: state.auth.token !==null,
        miniCartOpen: state.cart.miniCartOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleMiniCart: () => dispatch(actions.toggleMiniCart())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavItems);