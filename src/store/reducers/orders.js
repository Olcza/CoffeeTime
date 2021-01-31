import * as actionTypes from '../actions/actionTypes';

const initialState = {
    makeOrderLoading: false
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
                makeOrderLoading: false
            }
        default: 
            return state
    }
}

export default reducer;