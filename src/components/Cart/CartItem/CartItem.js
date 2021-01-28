import React from 'react';
import { connect } from 'react-redux';
import styles from './CartItem.module.css';

const CartItem = ({name, amount, price, id, index, remove}) => {
    const removeItem = (price, index) => {
        //console.log(price, index);
        remove(price, index);
    }

    return (
        <li className={styles.cartItem}>
            <img src={`images/${id}.jpg`} alt='' />
            <div className={styles.details}>
                <div className={styles.nameAndAmount}>
                    <span className={styles.name}>{name} </span>
                    <span className={styles.amount}>amount: {amount}g</span>
                </div>
                <div>
                    {price}zł 
                    <i className="fas fa-trash-alt" onClick={() => removeItem(price, index)}></i> 
                </div>
            </div>
        </li>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        remove: (price, index) => dispatch({type: 'REMOVE', price: price, index: index})
    }
}

export default connect(null, mapDispatchToProps)(CartItem);