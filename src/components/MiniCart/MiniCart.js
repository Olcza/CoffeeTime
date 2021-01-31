import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MiniCartItem from './MiniCartItem/MiniCartItem';
import Button from '../UI/Button/Button';
import styles from './MiniCart.module.css';
import * as actions from '../../store/actions/index';

const MiniCart = ({history, cartItems, total, onToggleMiniCart}) => {
    const proceedMiniCartHandler = () => {
        history.push('/cart');
        onToggleMiniCart();
    }

    const products = cartItems.map((product, i) => {
        return (
            <MiniCartItem 
                name={product.name} 
                amount={product.amount} 
                price={product.price} 
                key={product.name+i}
            />
        );
    })

    return (
        <div className={styles.miniCart}>
            {cartItems.length
            ?
            <Fragment>
                <ul>
                    {products}
                </ul>
                <span className={styles.total}>Total:</span>
                <span className={styles.price}>{total}zł</span>
                <div className={styles.button}>
                    <Button clicked={proceedMiniCartHandler} color='grey'>PROCEED</Button>
                </div>
            </Fragment>
            :
            <p className={styles.empty}>Your cart is empty</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleMiniCart: () => dispatch(actions.toggleMiniCart()),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MiniCart));