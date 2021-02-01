import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';

export const makeOrderStart = () => {
    return {
        type: actionTypes.MAKE_ORDER_START
    }
} 

export const makeOrderSuccess = (orderData) => {
    return {
        type: actionTypes.MAKE_ORDER_SUCCESS,
        orderData: orderData
    }
}

export const makeOrderFail = () => {
    return {
        type: actionTypes.MAKE_ORDER_FAIL
    }
}

export const makeOrder = (orderData) => {
    return dispatch => {
        return new Promise((resolve) => {
            dispatch(makeOrderStart());
            axios.post('/orders.json', orderData)
            .then(() => {
                dispatch(makeOrderSuccess());
                resolve();
            }).catch(() => {
                dispatch(makeOrderFail());
            });
        });
    }
}

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
} 

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        fetchedOrders: orders
    }
}

export const fetchOrdersFail = () => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL
    }
}

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        axios.get('/orders.json')
        .then(resp => {
            const fetchedOrders = [];
            for(let key in resp.data){
                fetchedOrders.push({...resp.data[key]});
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
        }).catch(() => {
            dispatch(fetchOrdersFail());
        });
    }
}