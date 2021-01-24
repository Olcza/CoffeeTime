import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = ({show, clicked}) => (
    show ? <div className={styles.backdrop} onClick={clicked}></div> : null
)

export default Backdrop;