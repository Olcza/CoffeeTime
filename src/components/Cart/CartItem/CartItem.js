import React from 'react';
import { connect } from 'react-redux';
import styles from './CartItem.module.css';
import * as actions from '../../../store/actions/index';

const CartItem = ({name, amount, price, id, index, onRemove}) => {
    const removeItem = (index, price) => {
        onRemove(index, price);
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
                    <i className="fas fa-trash-alt" onClick={() => removeItem(index, price)}></i> 
                </div>
            </div>
        </li>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onRemove: (index, price) => dispatch(actions.remove(index, price))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);