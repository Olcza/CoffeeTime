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
        default: 
            return state
    }
}

export default reducer;