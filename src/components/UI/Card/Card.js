import React from 'react';
import styles from './Card.module.css';

const Card = ({title, content, info, id, clicked}) => {
    return(
    <div className={styles.card} onClick={clicked} data-id={id}>
        <img src={`images/${id}.jpg`} alt='' />
        <span className={styles.title}>{title}</span>
        <span className={styles.content}>{content}</span>
        <span className={styles.info}>{info}</span>
    </div>
    )
};

export default Card;