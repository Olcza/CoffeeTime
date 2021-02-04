import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import styles from './Error.module.css';
import * as actions from '../../store/actions/index';

const Error = ({history, onRemoveErrors}) => {
    const redirectButtonHandler = () => {
        history.replace('/');
        onRemoveErrors();
    }

    return(
        <Modal backdropClicked={redirectButtonHandler}>
            <div className={styles.error}>
                Something went wrong, try again later...
                <Button color='brown' clicked={redirectButtonHandler} disabled={false}>GO TO HOME PAGE</Button>
            </div>
        </Modal>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onRemoveErrors: () => dispatch(actions.removeErrors()),
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Error));