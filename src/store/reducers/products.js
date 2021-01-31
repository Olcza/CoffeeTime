import * as actionTypes from '../actions/actionTypes';

const initialState = {
    products: [],
    detailedProduct: null,
    loading: false
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_PRODUCTS_START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return{
                ...state,
                products: action.fetchedProducts,
                loading: false
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return{
                ...state,
                loading: false
            }
        case actionTypes.SET_DETAILED_PRODUCT:
            const detailed = action.product ? state.products.find(p => p.id === action.product) : null
            return{
                ...state,
                detailedProduct: detailed
            }
        default: 
            return state
    }
}

export default reducer;