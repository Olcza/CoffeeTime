import React from 'react';
import styles from './OrderDetails.module.css';

const OrderDetails = ({address, total, products}) => {
    const allProducts = products.map((product, i) => {
        return(
            <li key={product.id + i}>
                <span>{product.name} </span>
                <span>({product.amount}g)</span>
                <span className={styles.price}>{product.price}zł</span>
            </li>
        )
    });

    return(
        <div className={styles.orderDetails}>
            <div className={styles.productsHeading}>Products:</div>
            <ol>
                {allProducts}
            </ol>
            <div className={styles.total}><span>Total: {total}zł</span></div>
            <div className={styles.address}>
                <div className={styles.productsHeading}>Delivery address</div>
                <span>{address.name}</span>
                <div>
                    <span>{address.street}, </span>
                    <span>{address.zipCode} </span>
                    <span>{address.city}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderDetails;