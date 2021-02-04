import * as actionTypes from '../actions/actionTypes';

const initialState = {
    makeOrderLoading: false,
    orders: [],
    fetchOrdersLoading: false,
    fetchingOrdersError: false,
    placingOrderError: false
};

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.MAKE_ORDER_START:
            return{
                ...state,
                makeOrderLoading: true
            }
        case actionTypes.MAKE_ORDER_SUCCESS:
            return{
                ...state,
                makeOrderLoading: false
            }
        case actionTypes.MAKE_ORDER_FAIL:
            return{
                ...state,
                makeOrderLoading: false,
                placingOrderError: true
            }
        case actionTypes.FETCH_ORDERS_START:
            return{
                ...state,
                fetchOrdersLoading: true
            }
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return{
                ...state,
                orders: action.fetchedOrders,
                fetchOrdersLoading: false
            }
        case actionTypes.FETCH_ORDERS_FAIL:
            return{
                ...state,
                fetchOrdersLoading: false,
                fetchingOrdersError: true
            }
        case actionTypes.REMOVE_ERRORS:
            return{
                ...state,
                fetchingOrdersError: false,
                placingOrderError: false
            }
        default: 
            return state
    }
}

export default reducer;