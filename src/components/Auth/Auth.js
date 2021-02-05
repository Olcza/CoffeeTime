import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import styles from './Auth.module.css';
import {checkValidity} from '../../shared/utility';
import {generateErrorInfo} from '../../shared/utility';
import * as actions from '../../store/actions/index';

const Auth = ({onAuth, isAuth, redirectPath, loading, error, onAuthAsTestUser}) => {
    const [authForm, setAuthForm] = useState({
        mail: {
            elementConfig: {
                type: 'email',
                placeholder: 'Email address'
            },
            value: '',
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementConfig: {
                type: 'text',
                placeholder: 'Password'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });
    const [isRegisterMode, setIsRegisterMode] = useState(false);

    const inputChangeHandler = (event, name) => {
        const updatedForm = {
            ...authForm,
            [name]: {
                ...authForm[name],
                value: event.target.value,
                valid: checkValidity(event.target.value, authForm[name].validation),
                touched: true
            }
        }
        setAuthForm(updatedForm);
    }

    const submitFormHandler = e => {
        e.preventDefault();
        onAuth(authForm.mail.value, authForm.password.value, isRegisterMode);
    }

    const switchToRegisterHandler = () => {
        setIsRegisterMode(true);
    }

    const switchToLoginHandler = () => {
        setIsRegisterMode(false);
    }

    const logInAsTestUserHandler = () => {
        onAuthAsTestUser();
    }

    const errorMessage = error ? <p>{generateErrorInfo(error.message)}</p> : null;

    let inputsArray = [];

    for(let key in authForm) {
        inputsArray.push({
            id: key,
            configData: authForm[key]
        });
    }

    let inputs = inputsArray.map(input => {
        return(
            <Input
                key={input.id}
                elementConfig={input.configData.elementConfig}
                value={input.configData.elementConfig.value}
                invalid={!input.configData.valid}
                shouldBeValidated={input.configData.validation}
                touched={input.configData.touched}
                changed={event => inputChangeHandler(event, input.id)}/> 
        )
    });

    if(loading) {
        inputs = <Spinner />
    }

    const title = isRegisterMode ? 'Register' : 'Login';
    const buttonText= title.toUpperCase();

    const registerInfo = 
        isRegisterMode ? 
        null : 
        <div className={styles.info}>
            <div>Do not have an account yet?</div>
            <Button color='brown' clicked={switchToRegisterHandler} disabled={false}>REGISTER</Button>
            <div>OR</div>
            <Button color='brown' clicked={logInAsTestUserHandler} disabled={false}>LOG IN AS TEST USER</Button>
            <div>Use test user</div>
        </div>

    const switchToLogin =  
        isRegisterMode ? 
        <div>
            <Button color='brown' clicked={switchToLoginHandler} disabled={false}>SWITCH TO LOGIN</Button>
        </div>
        : null

    let redirect = null;

    if(isAuth) {
        redirect = <Redirect to={redirectPath} />
    }

    return(
        <div className={styles.login}>
            {redirect}
            <h1>{title}</h1>
            <form>
                {errorMessage}
                {inputs}
                <Button color='green' clicked={e => submitFormHandler(e)} disabled={false}>{buttonText}</Button>
            </form>
            {registerInfo}
            {switchToLogin}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.token !== null,
        redirectPath: state.auth.redirectPath,
        loading: state.auth.loading,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isRegisterMode) => dispatch(actions.auth(email, password, isRegisterMode)),
        onAuthAsTestUser: () => dispatch(actions.auth('testMail@mail.com', 'testPassword', false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);