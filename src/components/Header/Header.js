import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const Header = () => {
    return (
        <div className="d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg navbar-light bg-light p-5 align-items-center">
                <Link to="/home">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/orders">Orders</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/checkout/:id">Check Out</Link>
                        </li>
                        
                        <li className="nav-item active">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Log In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* <Home></Home> */}
        </div>
    );
};

export default Header;