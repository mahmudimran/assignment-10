import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders,setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        fetch('https://vast-inlet-40416.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
    },[orders])

    
    return (
        <div>
            <h1>Total orders : {orders.length}</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => 
                        <tr>
                            <th scope="row">{order.car}</th>
                            <td>${order.price}</td>
                            <td>{order.curTime}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default Orders;