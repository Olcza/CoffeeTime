import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem/CartItem';
import Button from '../UI/Button/Button';
import styles from './Cart.module.css';

const Cart = ({cartItems, total}) => {
    const items = cartItems.map((item, i) => {
        return(
            <CartItem 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                id={item.id} 
                index={i} 
                key={item.id+i}/>
        )
    })

    return(
        cartItems.length 
        ?   
        <div className={styles.cart}>
            <h1>My cart</h1>
            <ul>
                {items}
                <li className={styles.total}><span className={styles.totalPrice}>Total: {total}zł</span></li>
            </ul>
            <div>
                <Button color='red' clicked=''>CANCEL</Button> 
                <Button color='green' clicked=''>CONTINUE</Button>
            </div>
        </div>
        :   
        <div className={styles.empty}>Your cart is empty</div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.total
    }
}

export default connect(mapStateToProps)(Cart);