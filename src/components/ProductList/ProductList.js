import React from 'react';
import Card from '../UI/Card/Card';
import styles from './ProductList.module.css';

const products = [
    {
        name: 'Indonesia Mandheling',
        type: 'arabica',
        price: 99
    },
    {
        name: 'Yellow Bourbon',
        type: 'arabica',
        price: 89
    },
    {
        name: 'Colombia Madellin',
        type: 'robusta',
        price: 129
    },
    {
        name: 'Uganda Mwezi',
        type: 'arabica',
        price: 119
    },
    {
        name: 'Ethiopia Yirgacheffe',
        type: 'robusta',
        price: 129
    },
    {
        name: 'Mixed Espresso',
        type: 'arabica',
        price: 99
    }
];

const ProductList = () => {
    const allProducts = products.map(product => {
        return <Card title={product.name} info={'type: ' + product.type} content={product.price + ' zł/kg'}/>
    });

    return (
        <div className={styles.container}>
            <div className={styles.productList}> {allProducts} </div>
        </div>
    );
}

export default ProductList;