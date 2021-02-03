import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import Button from '../UI/Button/Button';
import DeliveryForm from '../DeliveryForm/DeliveryForm';
import styles from './Cart.module.css';
import * as actions from '../../store/actions/index';

const Cart = ({cartItems, total, history, match, isAuth, onSetRedirectPath}) => {
    const cancelButtonClickHandler = () => {
        history.goBack();
    }

    const continueButtonClickHandler = () => {
        if(isAuth) {
            history.push('/cart/delivery-data');
        } else {
            onSetRedirectPath();
            history.push('/auth');
        }
    }

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

    const buttonText = isAuth? 'CONTINUE' : 'LOGIN TO CONTINUE'

    return(
        cartItems.length 
        ?   
        <Fragment>
            <div className={styles.cart}>
                <h1>My cart</h1>
                <ul>
                    {items}
                    <li className={styles.total}><span className={styles.totalPrice}>Total: {total}zł</span></li>
                </ul>
                <div>
                    <Button color='red' clicked={cancelButtonClickHandler} disabled={false}>CANCEL</Button> 
                    <Button color='green' clicked={continueButtonClickHandler} disabled={false}>{buttonText}</Button>
                </div>
            </div>
            <Route 
                path={match.path + '/delivery-data'}
                component = {DeliveryForm} 
            />
        </Fragment>
        :   
        <div className={styles.empty}>Your cart is empty</div>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.total,
        isAuth: state.auth.token !==null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetRedirectPath: () => dispatch(actions.setRedirectPath('/cart')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);