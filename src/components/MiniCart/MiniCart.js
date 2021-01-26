import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MiniCartItem from './MiniCartItem/MiniCartItem';
import Button from '../UI/Button/Button';
import styles from './MiniCart.module.css';

const MiniCart = ({history, cartItems, total}) => {
    const proceedMiniCartHandler = () => {
        history.push('/cart');
    }

    const products = cartItems.map(p => {
        return (
            <MiniCartItem name={p.name} amount={p.amount} price={p.price} key={p.name}/>
        );
    })

    return (
        <div className={styles.miniCart}>
            <ul>
                {products}
            </ul>
            <span className={styles.total}>Total:</span>
            <span className={styles.price}>{total}</span>
            <div className={styles.button}>
                <Button clicked={proceedMiniCartHandler} color='grey'>PROCEED</Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartItems,
        total: state.total
    }
}

export default withRouter(connect(mapStateToProps)(MiniCart));