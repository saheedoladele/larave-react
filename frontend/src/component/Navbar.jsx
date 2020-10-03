import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        const token = localStorage.getItem("token");
   
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                    <div className="container-fluid">
                        <Link to="/"  className="navbar-brand">
                            <img src="/images/afrilearn_logo.png" alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Home</Link>
                               
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">{(token?'Logout':'Login')}</Link>
                            </li>
                        </ul>
                    </div>
           
                </nav>
            </div>
        );
    }
}


