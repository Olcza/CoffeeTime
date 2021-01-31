import React from 'react';
import styles from './Input.module.css';

const Input = ({elementConfig, value, invalid, shouldBeValidated, changed, touched}) => {
    const inputClassName = [styles.InputElement];
    if(shouldBeValidated && invalid && touched) {
        inputClassName.push(styles.invalid);
    }

    const inputElement = <input className={inputClassName.join(' ')} {...elementConfig} value={value} onChange={changed}/>

    return(
        <div className={styles.input}>
            {inputElement}
        </div>
    )
}

export default Input;