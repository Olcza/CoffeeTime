import * as actionTypes from '../actions/actionTypes';
import {addCartItemToStorage, removeCartItemFromStorage} from '../../shared/localStorageActions';

export const add = cartItem => {
    addCartItemToStorage(cartItem);
    return {
        type: actionTypes.ADD,
        cartItem: cartItem
    };
};

export const remove = (index, price) => {
    removeCartItemFromStorage(index, price);
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

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    };
};

export const addListOfCartItems = (cartItems, total) => {
    return {
        type: actionTypes.ADD_LIST_OF_CART_ITEMS,
        cartItems: cartItems,
        total: total
    };
};