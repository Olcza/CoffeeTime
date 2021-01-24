import React from 'react';
import styles from './MiniCartItem.module.css';

const MiniCartItem = ({name, amount, price}) => (
    <div className={styles.miniCartItem}>
        <div>{name}</div>
        <div className={styles.details}>
            <span>{amount}g</span>
            <span className={styles.price}>{price}zł</span>
        </div>
    </div>
);

export default MiniCartItem;