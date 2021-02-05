import axios from '../../axios';
import * as actionTypes from './actionTypes';
import {getTokenFromStorage, getExpirationDateFromStorage, getUserIdFromStorage, setAuthDataInStorage, 
       cleartAuthDataInStorage} from '../../shared/localStorageActions';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isRegisterMode) => {
    console.log(email);
    console.log(password);
    return dispatch => {
        dispatch(authStart());

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDla4A_8xklnZRtjYUSlF3Bu4NSPHA2cew';

        if (!isRegisterMode) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDla4A_8xklnZRtjYUSlF3Bu4NSPHA2cew';
        }

        axios.post(url, authData)
        .then(response => {
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);

            setAuthDataInStorage(response.data.idToken, response.data.localId, expirationDate);

            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(authTimeout(response.data.expiresIn));
        }).catch(error => {
            dispatch(authFail(error.response.data.error));
        })
    }
}

export const logout = () => {
    cleartAuthDataInStorage();
    return {
        type: actionTypes.LOGOUT
    }
}

export const authTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
}

export const setRedirectPath = (path) => {
    return {
        type: actionTypes.SET_REDIRECT_PATH,
        path: path
    };
}

export const authCheckState = () => {
    return dispatch => {
        const token = getTokenFromStorage();

        if(!token){
            dispatch(logout());
        } else {
            const expirationDate = new Date(getExpirationDateFromStorage());
            if(expirationDate < new Date()){
                dispatch(logout());
            } else {
                const userId = getUserIdFromStorage();
                dispatch(authSuccess(token, userId));
                dispatch(authTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}