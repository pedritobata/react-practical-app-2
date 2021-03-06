import React, { useState, useEffect } from 'react';
import './Orders.css';
import { db } from '../../firebase';
// import { useStateValue } from '../../store/StateProvider';
import Order from './Order/Order';
import { useSelector } from 'react-redux';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const {user} = useSelector(state => state.userLoginListener);

    useEffect(()=>{
        if(user){
            db.collection('users')
            .doc('' + user.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot => {
                setOrders(snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    }
                }))
            })
        }else{
            setOrders([]);
        }
    }, [user]);

    return <div className="orders">
        <h1>Your orders</h1>
        <div className="orders__container">
            {
                orders.map(order => {
                    return <Order order={order} key={order.id}/>
                })
            }
        </div>
    </div>
}

export default Orders;