import React, {Fragment} from 'react';
import Backdrop from '../Backdrop/Backdrop';
import styles from './Modal.module.css';

const Modal = ({children, backdropClicked}) => (
    <Fragment>
        <Backdrop show='true' clicked={backdropClicked}/>
        <div className={styles.modal}>
            {children}
        </div>
    </Fragment>
);

export default Modal;