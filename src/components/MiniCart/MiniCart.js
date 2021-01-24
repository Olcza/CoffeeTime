import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';
import MiniCartItem from './MiniCartItem/MiniCartItem';
import Button from '../UI/Button/Button';
import styles from './MiniCart.module.css';

const MiniCart = ({history}) => {
    const [productsInCart, setProductsInCart] = useState([
        {
            name: 'Mixed Espresso',
            amount: 500,
            price: 49.50
        },
        {
            name: 'Uganda Mwezi',
            amount: 100,
            price: 49.50
        },
        {
            name: 'Ethiopia Yirgacheffe',
            amount: 1000,
            price: 49.50
        }
    ]);

    const proceedMiniCartHandler = () => {
        history.push('/cart');
    }

    const products = productsInCart.map(p => {
        return (
            <MiniCartItem name={p.name} amount={p.amount} price={p.price} key={p.name}/>
        );
    })

    return (
        <div className={styles.miniCart}>
            <ul>
                {products}
            </ul>
            <span className={styles.total}> Total: </span>
            <span className={styles.price}> 100.00zł</span>
            <div className={styles.button}>
                <Button clicked={proceedMiniCartHandler} color='grey'>PROCEED</Button>
            </div>
        </div>
    )
}

export default withRouter(MiniCart);