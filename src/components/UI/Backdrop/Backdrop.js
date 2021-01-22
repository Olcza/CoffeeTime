import React from 'react';

const Backdrop = ({show}) => (
    show ? <div className={styles.backdrop}></div> : null
)

export default Backdrop;