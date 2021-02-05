export const getTokenFromStorage = () => localStorage.getItem('token');

export const getExpirationDateFromStorage = () => localStorage.getItem('expirationDate');

export const getUserIdFromStorage = () => localStorage.getItem('userId');

export const setAuthDataInStorage = (token, userId, expirationDate) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('expirationDate', expirationDate);
}

export const cleartAuthDataInStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
}

export const getCartItemsFromStorage = () => JSON.parse(localStorage.getItem('cartItems')) || [];

export const getTotalFromStrorage = () => localStorage.getItem('total');

export const addCartItemToStorage = cartItem => {
    const cartItemsInStorage = getCartItemsFromStorage();
    const totalInStorage = getTotalFromStrorage();
    let cartItems = [];
    let sum = cartItem.price;

    cartItems.push(cartItem);

    if(cartItemsInStorage.length){ 
        cartItems = [...cartItemsInStorage, ...cartItems];
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    if(totalInStorage && !isNaN(totalInStorage)){
        sum = Number(totalInStorage) + Number(cartItem.price);
    }
    localStorage.setItem('total', sum);
}

export const removeCartItemFromStorage = (index, price) => {
    const cartItemsInStorage = getCartItemsFromStorage();
    const totalInStorage = getTotalFromStrorage();

    if(cartItemsInStorage.length){
        const newCartItems = cartItemsInStorage.filter((item, i) => i !== index);
        const total = (Number(totalInStorage) - Number(price)).toFixed(2);

        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
        localStorage.setItem('total', total);
    }
}

export const clearCartItemsDataInStorage = () => {
    localStorage.removeItem('cartItems');
    localStorage.removeItem('total');
}
