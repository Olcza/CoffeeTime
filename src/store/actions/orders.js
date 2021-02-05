import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios';
import {clearCartItemsDataInStorage} from '../../shared/localStorageActions';

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

export const makeOrder = (orderData, token) => {
    console.log('token', token)
    return dispatch => {
        return new Promise((resolve) => {
            dispatch(makeOrderStart());
            axios.post(`/orders.json?auth=${token}`, orderData)
            .then(() => {
                dispatch(makeOrderSuccess());
                clearCartItemsDataInStorage();
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

export const fetchOrders = (token, userId) => {
    console.log('id2', userId);
    return dispatch => {
        dispatch(fetchOrdersStart());

        const params = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        
        axios.get(`/orders.json${params}`)
        .then(resp => {
            const fetchedOrders = [];
            for(let key in resp.data){
                fetchedOrders.push({...resp.data[key], id: key});
            }
            dispatch(fetchOrdersSuccess(fetchedOrders));
        }).catch(() => {
            dispatch(fetchOrdersFail());
        });
    }
}

export const removeErrors = () => {
    return {
        type: actionTypes.REMOVE_ERRORS
    }
}