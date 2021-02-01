import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import OrderDetails from './OrderDetails/OrderDetails';
import styles from './Orders.module.css';
import * as actions from '../../store/actions/index';

const Orders = ({onFetchOrders, orders, loading}) => {
    useEffect(() => {
        onFetchOrders()
    }, [onFetchOrders]);

    const allOrders = orders.map(order => {
        return(
            <OrderDetails
                address={order.address}
                total={order.total}
                products={order.products}
            />
        )
    })

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
        loading: state.orders.fetchOrdersLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: () => dispatch(actions.fetchOrders()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);