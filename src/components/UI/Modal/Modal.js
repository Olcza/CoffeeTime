import React, {Fragment} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = ({show}) => {
    <Fragment>
        <Backdrop show={show}/>
        <div className={styles.modal}>
            {children}
        </div>
    </Fragment>
}

export default Modal;