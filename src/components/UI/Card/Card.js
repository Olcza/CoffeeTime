import React from 'react';
import styles from './Card.module.css';

const Card = ({title, info, content}) => (
    <div className={styles.card}>
        <img src='images/1.png' alt=''/>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>{info}</div>
        <div className={styles.content}>{content}</div>
    </div>
);

export default Card;