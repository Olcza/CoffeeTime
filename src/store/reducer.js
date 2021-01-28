const initialState = {
    cartItems: [],
    total: 0
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD':
            return{
                ...state,
                cartItems: state.cartItems.concat(action.val),
                total: (Number(state.total) + Number(action.val.price)).toFixed(2)
            }
        case 'REMOVE':
            return{
                ...state,
                cartItems: state.cartItems.filter((item, index) => index !== action.index),
                total: (Number(state.total) - Number(action.price)).toFixed(2)
            }
        default: 
            return state
    }
}

export default reducer;