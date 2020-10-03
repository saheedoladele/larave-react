import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../css/signup.css';

export default class Register extends Component {
    constructor(){
        super()
        this.state ={
            name:null,
            email:null,
            password:null,
            phoneno:null,
            level:null
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
    axios.post("http://127.0.0.1:8000/api/register", data)
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
                            <h4 className="card-title"><i className="fa fa-graduation-cap"></i> S i g n U p</h4>
                        </div>
                        <form onSubmit={this.handlesubmit}>
                        <div className="card-body">
                            <div className="input-group mb-3">
                            <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fa fa-user-circle"></span>
                                    </div>
                                </div>
                                <input type="text" name="name" 
                                id="name" className="form-control" 
                                placeholder="Full Name"
                                onChange={this.handleChange}/>
                                
                            </div>
            
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                        <div className="input-group-text">
                                            <span className="fa fa-envelope"></span>
                                        </div>
                                    </div>
                                    <input type="email" name="email" 
                                    id="email" className="form-control" 
                                    placeholder="info@example.com"
                                    onChange={this.handleChange}/>
                                    
                                </div>
            
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fa fa-lock"></span>
                                            </div>
                                        </div>
                                        <input type="password" name="password" 
                                        id="password" className="form-control" 
                                        placeholder="Password"
                                        onChange={this.handleChange}/>
                                        
                                    </div>
            
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fa fa-mobile"></span>
                                                </div>
                                            </div>
                                            <input type="text" name="phoneno" 
                                            id="phoneno" className="form-control" 
                                            placeholder="Phone Number"
                                            onChange={this.handleChange}/>
                                            
                                    </div>
            
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                                <div className="input-group-text">
                                                    <span className="fa fa-graduation-cap"></span>
                                                </div>
                                            </div>
                                           <select name="level" id="level" 
                                           className="form-control"
                                           onChange={this.handleChange} >
                                               <option>::Select Level</option>
                                               <option>Primary</option>
                                               <option>Secondary</option>
                                               <option>Tertiary</option>
                                               <option>Professional</option>
                                           </select>
                                            
                                    </div>
            
                                    <div class="input-group mb-3">
                                        <button className="btn btn-primary btn-block"><i className="fa fa-edit"></i> SignUp</button>
                                    </div>
                                    
                                    <div class="input-group mb-3">
                                        <p className="note"> Already have an Account? 
                                     
                                            <Link to="/login"> Login</Link>
                                            
                                       
                                        
                                        </p>
                                    </div>
            
                                    
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
