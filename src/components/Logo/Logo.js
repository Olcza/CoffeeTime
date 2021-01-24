import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './Logo.module.css';
import logo_img from '../../assets/coffee-1918552_640.png';

const Logo = ({history}) => {
    const goToHomePage = () => {
        history.push('/');
    }

    return (
        <div className={styles.logo} onClick={goToHomePage}>
            <img src={logo_img} alt='logo'/>
        </div>
    );
};

export default withRouter(Logo);