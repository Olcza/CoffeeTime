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
