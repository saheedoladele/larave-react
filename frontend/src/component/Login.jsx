import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert';

export default class Login extends Component {
    constructor(){
        super()
        this.state ={
            email:null,
            password:null,
        }
    }
handleChange = (e)=>{
   // console.log(e.target.value);
     const name= e.target.name;
     const value = e.target.value;
    this.setState({
        [name]: value
    })
    // console.log(this.state);
}
handlesubmit = (e)=> {
    e.preventDefault();
    const data = this.state;
    //console.log(data)
    axios.post("http://127.0.0.1:8000/api/login", data)
    .then(res => {
        console.log(res);
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user", res.data.user)
        
     return <Redirect to="/dashboard" />;
    });
  };
    render() {
        const token = localStorage.getItem("token");
    if (token) {
      return <Redirect to="/dashboard" />;
    }
        return (
            <div>
               <div className="row justify-content-center mt-4">
                    
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title"><i className="fa fa-key"></i> Login</h4>
                        </div>
                        <div className="card-body">
                        <form onSubmit={this.handlesubmit}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-envelope"></span>
                                            </div>
                                        </div>
                                        <input type="email" 
                                        name="email"
                                        onChange={this.handleChange}
                                        id="email" className="form-control" 
                                        placeholder="info@example.com"/>
                                    
                                </div>
            
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-lock"></span>
                                            </div>
                                        </div>
                                        <input type="password" 
                                        name="password"
                                        onChange={this.handleChange} 
                                        id="password" 
                                        className="form-control" 
                                        placeholder="Password"/>
                                        
                                </div>
                                    <div class="input-group mb-3">
                                        <button className="btn btn-primary btn-block"><i className="fa fa-sign-in"></i> Login</button>
                                    </div>
                                    <div className="input-group mb-3">
                                        <p className="note"> Dont have an account? 
                                      <Link to="/register"> Create One</Link>
                                      
                                        </p>
                                    </div>
                            </form>
                        </div>
            
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}


