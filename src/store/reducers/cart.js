import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartItems: [],
    total: 0,
    miniCartOpen: false
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.ADD:
            return{
                ...state,
                cartItems: state.cartItems.concat(action.cartItem),
                total: (Number(state.total) + Number(action.cartItem.price)).toFixed(2)
            }
        case actionTypes.REMOVE:
            return{
                ...state,
                cartItems: state.cartItems.filter((item, index) => index !== action.index),
                total: (Number(state.total) - Number(action.price)).toFixed(2)
            }
        case actionTypes.TOGGLE_MINI_CART:
            return{
                ...state,
                miniCartOpen: !state.miniCartOpen
            } 
        default: 
            return state
    }
}

export default reducer;