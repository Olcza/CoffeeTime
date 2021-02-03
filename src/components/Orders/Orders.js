import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import OrderDetails from './OrderDetails/OrderDetails';
import styles from './Orders.module.css';
import * as actions from '../../store/actions/index';

const Orders = ({onFetchOrders, orders, loading, token, userId}) => {
    console.log(orders);
    useEffect(() => {
        console.log('id', userId);
        onFetchOrders(token, userId)
    }, [onFetchOrders, token, userId]);

    let allOrders;

    if(orders.length) {
        allOrders = orders.map(order => {
            return(
                <OrderDetails
                    address={order.address}
                    total={order.total}
                    products={order.products}
                    key={order.id}
                />
            )
        })
    } else {
        allOrders = <p className={styles.noOrders}>You have no orders yet...</p>
    }

    return(
        <div className={styles.orders}>
            <h1>Your orders</h1>
            {loading
            ?
            <Spinner/>
            :
            <div>{allOrders}</div>}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.fetchOrdersLoading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);