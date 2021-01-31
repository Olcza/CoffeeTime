import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import styles from './ProductDetails.module.css';
import * as actions from '../../../store/actions/index';

const ProductDetails = ({product, onAdd, onSetDetailedProduct}) => {
    const [productPrice, setProductPrice] = useState(0);
    const [productAmount, setProductAmount] = useState(100);

    useEffect(() => {
        const newPrice = (productAmount/1000 * product.price).toFixed(2);
        setProductPrice(newPrice);
    }, [productAmount, product]);

    const addToCartHandler = () => {
        const cartItem = {
            name: product.name,
            amount: productAmount,
            price: productPrice,
            id: product.id
        }
        onAdd(cartItem);
        onSetDetailedProduct(null);
    };

    const closeDetailsHandler = () => {
        onSetDetailedProduct(null);
    }

    return (
        <Modal show='true' backdropClicked={closeDetailsHandler}>
            <div className={styles.productDetails}>
                <img src={`images/${product.id}det.jpg`} alt=''></img>
                <div className={styles.name}>{product.name}</div>
                <div className={styles.specification}>
                    <div><span>type: </span>{product.type}</div>
                    <div><span>roast level: </span>{product.roastLevel}</div>
                    <div><span>country of orign: </span>{product.country}</div>
                    <div><span>price: </span>{(product.price/10).toFixed(2)} zł/100g</div>
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
                <div className={styles.button}>
                    <Button clicked={addToCartHandler} color='brown'>ADD TO CART</Button>
                </div>
            </div>
        </Modal>
    );
}

const mapStateToProps = state => {
    return {
        product: state.products.detailedProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (cartItem) => dispatch(actions.add(cartItem)),
        onSetDetailedProduct: product => dispatch(actions.setDetailedProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);