import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Admin = () => {

    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [orders, setOrders]= useState([]);
    useEffect(() => {
        fetch('https://vast-inlet-40416.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=> setOrders(data))
    }, [])

    return (
        <div>
            <Link to="/addNew"><button className="info">Add New Product</button></Link>
            <br/><br/>
            <Link to="/manage"><button className="info">Manage Products</button></Link>
            <br/><br/>
            <Link to="/edit"><button className="info">Edit Products</button></Link> 
        </div>
    );
};

export default Admin;