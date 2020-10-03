import React, { Component } from 'react';
import '../css/home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div class="jumbotron jumbotron1 text-center">
                        <h2>Unlimited Learning Resources</h2>
                        <p>Get access to unlimited learning materials, singup and start your free trial today.</p>
                        <button className="btn btn-outline-secondary"> Learn More</button>
                        &nbsp;
                        <button className="btn btn-primary"> Start Now</button>
                </div>
                {/* <div className="jumbotron">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <h3>Want to Learn New things?</h3>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <button className="btn btn-primary"> Signup Now</button>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}
