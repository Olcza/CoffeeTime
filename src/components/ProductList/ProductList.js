import React, {Fragment, useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import Card from '../UI/Card/Card';
import ProductDetails from './ProductDetails/ProductDetails';
import Button from '../UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './ProductList.module.css';

const ProductList = ({history}) => {
    const [products, setProducts] = useState([]);
    const [detailedProduct, setDetailedProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/products.json')
        .then(resp => {
            setProducts(resp.data);
            setLoading(false);
        }).catch(e => {
            console.log(e);
            setLoading(false);
        });
    },[]);

    const productClickHandler = (e) => {
        setDetailedProduct(e.target.closest("div").dataset.id);
    }

    const closeDetailsHandler = () => {
        setDetailedProduct(null);
    }

    const goToCartHandler = () => {
        history.push('/cart');
    }

    const allProducts = products.map(product => {
        return (
            <Card 
                key={product.id} 
                title={product.name} 
                content={`type: ${product.type}`} 
                info={`${product.price} zł/kg`}
                id = {product.id}
                clicked={(e) => productClickHandler(e)}/>
        );
    });

    const filteredDetailedProduct = products.filter(p => p.id===detailedProduct)

    const details = detailedProduct
                    ? <ProductDetails productData={filteredDetailedProduct} backdropClick={closeDetailsHandler}/> 
                    : null;

    return (
        loading ?
        <Spinner/> :
        <Fragment>
            {details}
            <div className={styles.container}>
                <div className={styles.productList}> {allProducts} </div>
            </div>
            <div className={styles.button}>
                <Button color='brown' clicked={goToCartHandler}>GO TO CART</Button>
            </div>
        </Fragment>
    );
}

export default withRouter(ProductList);