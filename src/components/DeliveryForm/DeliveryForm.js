import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../UI/Modal/Modal';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../Error/Error';
import styles from './DeliveryForm.module.css';
import * as actions from '../../store/actions/index';
import {checkValidity} from '../../shared/utility';

const DeliveryForm = ({history, cartItems, total, onMakeOrder, loading, onClearCart, token, userId, error}) => {
    const [addressForm, setAddressForm] = useState({
        name: {
            elementConfig: {
                type: 'text',
                placeholder: 'Name',
            },
            value: '',
            validation: {
                required: true,
                minLength: 3
            },
            valid: false,
            touched: false
        },
        street: {
            elementConfig: {
                type: 'text',
                placeholder: 'Street'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zipCode: {
            elementConfig: {
                type: 'text',
                placeholder: 'Postal Code'
            },
            value: '',
            validation: {
                required: true,
                minLength: 6,
                maxLength: 6,
                numbersAndDashesOnly: true
            },
            valid: false,
            touched: false
        },
        city: {
            elementConfig: {
                type: 'text',
                placeholder: 'City'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        phone: {
            elementConfig: {
                type: 'tel',
                placeholder: 'Phone number'
            },
            value: '',
            validation: {
                required: true,
                numbersAndDashesOnly: true,
                minLength: 5
            },
            valid: false,
            touched: false
        }
    });
    const [isFormValid, setIsFormValid] = useState(false);

    const cancelHandler = e => {
        e.preventDefault();
        history.goBack();
    }

    const continueHandler = e => {
        e.preventDefault();

        const formData = {};
        for(let key in addressForm){
            formData[key] = addressForm[key].value;
        }

        const orderData = {
            products: cartItems,
            total: total,
            address: formData,
            userId: userId
        }

        onMakeOrder(orderData, token)
        .then(() => {
            onClearCart();
            history.push('/');
        });
    }

    const inputChangeHandler = (event, identifier) => {
        const updatedForm = {...addressForm};
        const updatedFormChangedElement = updatedForm[identifier];

        updatedFormChangedElement.value = event.target.value;
        updatedFormChangedElement.valid = checkValidity(updatedFormChangedElement.value, updatedFormChangedElement.validation);
        updatedFormChangedElement.touched = true;

        let isFormValid = true;
        for(identifier in updatedForm){
            isFormValid = updatedForm[identifier].valid && isFormValid;
        }

        setAddressForm(updatedForm);
        setIsFormValid(isFormValid);
    }

    let addressInputsArray = [];

    for(let key in addressForm) {
        addressInputsArray.push({
            id: key,
            configData: addressForm[key]
        });
    }

    const inputs = addressInputsArray.map(input => {
        return(
            <Input
                key={input.id}
                elementType={input.configData.elementType}
                elementConfig={input.configData.elementConfig}
                value={input.configData.elementConfig.value}
                invalid={!input.configData.valid}
                shouldBeValidated={input.configData.validation}
                touched={input.configData.touched}
                changed={event => inputChangeHandler(event, input.id)}/> 
        )
    });

    const errorModal = error ? <Error/> : null;

    return (
        <Modal backdropClicked={cancelHandler}>
            {loading
            ?
            <Spinner/>
            :
            <form className={styles.addressForm}>
                {errorModal}
                <div className={styles.info}>Provide the delivery address, please:</div>
                {inputs}
                <Button color='red' clicked={e => cancelHandler(e)} disabled={false}>CANCEL</Button>
                <Button color='green' clicked={e => continueHandler(e)} disabled={!isFormValid}>ORDER</Button>
            </form>}
        </Modal>
    )
};

const mapStateToProps = state => {
    return {
        cartItems: state.cart.cartItems,
        total: state.cart.total,
        loading: state.orders.makeOrderLoading,
        token: state.auth.token,
        userId: state.auth.userId,
        error: state.orders.placingOrderError
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMakeOrder: (orderData, token) => dispatch(actions.makeOrder(orderData, token)),
        onClearCart: () => dispatch(actions.clearCart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm);