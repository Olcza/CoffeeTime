import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';

export const fetchProductsStart = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_START
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        fetchedProducts: products
    }
}

export const fetchProductsFail = () => {
    return {
        type: actionTypes.FETCH_PRODUCTS_FAIL
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsStart());
        axios.get('/products.json')
        .then(resp => {
            dispatch(fetchProductsSuccess(resp.data));
        }).catch(() => {
            dispatch(fetchProductsFail());
        });
    }
}

export const setDetailedProduct = (product) => {
    console.log('action');
    return {
        type: actionTypes.SET_DETAILED_PRODUCT,
        product: product
    };
};