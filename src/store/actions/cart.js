import * as actionTypes from '../actions/actionTypes';

export const add = cartItem => {
    return {
        type: actionTypes.ADD,
        cartItem: cartItem
    };
};

export const remove = (index, price) => {
    return {
        type: actionTypes.REMOVE,
        index: index,
        price: price
    };
};

export const toggleMiniCart = () => {
    return {
        type: actionTypes.TOGGLE_MINI_CART
    };
};