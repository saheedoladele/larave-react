import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        const token = localStorage.getItem("token");
    if (!token) {
      return <Redirect to="/login" />;
    }
        return (
            <div>
                <div className="row justify-content-center">
                    <h2>Welcome!</h2>
                </div>
            </div>
        );
    }
}
