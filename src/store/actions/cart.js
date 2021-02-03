import * as actionTypes from '../actions/actionTypes';

export const add = cartItem => {
    let cartItems = [];
    cartItems.push(cartItem);
    const cartItemsInStorage = JSON.parse(localStorage.getItem('cartItems'));
    const totalInStorage = localStorage.getItem('total');
    if(cartItemsInStorage && cartItemsInStorage.length){ 
        cartItems = [...cartItemsInStorage, ...cartItems];
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    let sum = cartItem.price;
    if(totalInStorage && !isNaN(totalInStorage)){
        sum = Number(totalInStorage) + Number(cartItem.price);
    }
    localStorage.setItem('total', sum);

    return {
        type: actionTypes.ADD,
        cartItem: cartItem
    };
};

export const remove = (index, price) => {
    const cartItemsInStorage = JSON.parse(localStorage.getItem('cartItems'));
    const totalInStorage = localStorage.getItem('total');

    if(cartItemsInStorage && cartItemsInStorage.length){
        const newCartItems = cartItemsInStorage.filter((item, i) => {
            return i !== index;
        });
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        const total = (Number(totalInStorage) - Number(price)).toFixed(2);
        localStorage.setItem('total', total);
    }

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