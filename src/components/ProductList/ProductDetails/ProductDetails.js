import React, { useEffect, useState } from 'react';
import Modal from '../../UI/Modal/Modal';
import styles from './ProductDetails.module.css';

const ProductDetails = ({productData, backdropClick}) => {
    const [productPrice, setProductPrice] = useState(0);
    const [productAmount, setProductAmount] = useState(100);

    useEffect(() => {
        const newPrice = (productAmount/1000 * productData[0].price).toFixed(2);
        setProductPrice(newPrice);
    }, [productAmount, productData])

    return (
        <Modal show='true' backdropClicked={backdropClick}>
            <div className={styles.productDetails}>
                <img src='images/1a.png' alt=''></img>
                <div className={styles.name}>{productData[0].name}</div>
                <div>
                    <span className={styles.label}>type: </span>
                    <span>{productData[0].type}</span>
                </div>
                <div>
                    <span className={styles.label}>roast level: </span>
                    <span>{productData[0].roastLevel}</span>
                </div>
                <div>
                    <span className={styles.label}>country of orign: </span>
                    <span>{productData[0].country}</span>
                </div>
                <div>
                    <span className={styles.label}>price: </span>
                    <span>{(productData[0].price/10).toFixed(2)} zł/100g</span>
                </div>
                <div className={styles.pricingArea}>
                    <span className={styles.label}>How much of coffee do you want to buy?</span>
                    <div className={styles.select}>
                        <select value={productAmount} onChange={e => setProductAmount(e.target.value)}>
                            <option value="100">100g</option>
                            <option value="500">500g</option>
                            <option value="1000">1000g</option>
                        </select>
                    </div>
                    <span>Price: {productPrice}zł</span>
                </div>
                <button>Add to cart</button>
            </div>
        </Modal>
    );
}

export default ProductDetails;