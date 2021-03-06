import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Card from '../UI/Card/Card';
import ProductDetails from './ProductDetails/ProductDetails';
import Button from '../UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import styles from './ProductList.module.css';
import * as actions from '../../store/actions/index';

const ProductList = ({history, onFetchProducts, loading, products, onSetDetailedProduct, 
    detailedProduct, redirectPath, onSetRedirectPath, error}) => {

    useEffect(() => {
        onFetchProducts();

        if(redirectPath !== '/') {
            onSetRedirectPath();
        }
    },[onFetchProducts, onSetRedirectPath, redirectPath]);

    const productClickHandler = id => {
        onSetDetailedProduct(id);
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
                clicked={() => productClickHandler(product.id)}/>
        );
    });

    const detailed = detailedProduct? <ProductDetails/> : null;

    let productList = (
        <Fragment>
            {detailed}
            <div className={styles.container}>
                <div className={styles.productList}>{allProducts}</div>
            </div>
        </Fragment>
    );

    if(error) {
        productList = <p className={styles.error}>Could not load products. Try again later.</p>
    }

    return (
        loading ?
        <Spinner/> :
        <Fragment>
            {productList}
            <div className={styles.button}>
                <Button color='brown' clicked={goToCartHandler} disabled={false}>GO TO CART</Button>
            </div>
        </Fragment>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products.products,
        loading: state.products.loading,
        detailedProduct: state.products.detailedProduct,
        redirectPath: state.auth.redirectPath,
        error: state.products.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchProducts: () => dispatch(actions.fetchProducts()),
        onSetDetailedProduct: productId => dispatch(actions.setDetailedProduct(productId)),
        onSetRedirectPath: () => dispatch(actions.setRedirectPath('/')),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));