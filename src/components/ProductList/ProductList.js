import React, {Fragment, useState} from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../UI/Card/Card';
import ProductDetails from './ProductDetails/ProductDetails';
import styles from './ProductList.module.css';

const products = [
    {
        id: 'inma',
        name: 'Indonesia Mandheling',
		country: 'Indonesia',
		roastLevel: 'dark' ,
        type: 'arabica',
        price: 99
    },
    {
        id: 'yebo',
        name: 'Yellow Bourbon',
		country: 'Brasil',
		roastLevel: 'light',
        type: 'arabica',
        price: 89
    },
    {
        id: 'coma',
        name: 'Colombia Madellin',
		country: 'Colombia',
		roastLevel: 'medium',
        type: 'robusta',
        price: 129
    },
	{
        id: 'etyi',
        name: 'Ethiopia Yirgacheffe',
		country: 'Ethiopia',
		roastLevel: 'medium',
        type: 'arabica',
        price: 129
    },
    {
        id: 'ugmw',
        name: 'Uganda Mwezi',
		country: 'Uganda',
		roastLevel: 'medium',
        type: 'robusta',
        price: 119
    },
    {
        id: 'mies',
        name: 'Mixed Espresso',
		country: 'Kenya, India, Brasil',
		roastLevel: 'dark',
        type: 'arabica',
        price: 99
    }
];

const ProductList = ({history}) => {
    const [detailedProduct, setDetailedProduct] = useState(null);

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
        <Fragment>
            {details}
            <div className={styles.container}>
                <div className={styles.productList}> {allProducts} </div>
            </div>
            <button onClick={goToCartHandler}>Go to cart</button>
        </Fragment>
    );
}

export default withRouter(ProductList);