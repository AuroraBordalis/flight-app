import React, { Component } from "react";
import '../App.css';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: null,
            email: null,
            password1: null,
            password2: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }
    checkEmptyNull(var1, var2, var3, var4){
        if(var1 && var2 && var3 && var4){
            return true;
        }
        else{
            return false;
        }
    }
    handleChange = (event) =>{
        if (event.target != undefined) {
            const name = event.target.name;
            const value = event.target.value;
            this.setState({[name]: value});
        }

    }

    handleRegister = (event) => {
        const username = this.state.username;
        const email = this.state.email;
        const pass1 = this.state.password1;
        const pass2 = this.state.password2;
        if(!this.checkEmptyNull(username,email,pass1,pass2)){
            window.alert("Please insure that are fields are filled");
        }
        var dict ={
            username : username,
            email : email,
            password : pass1,
            role : ["user"]
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dict)
        };
        var status;
        fetch("http://localhost:8080/api/auth/signup", requestOptions)
            .then(response => { if(response.status == 200){
                alert("User succesfully registered");
                console.log(window.sessionStorage.getItem("token"));
            }
            
            });

    }
    render() {
        return (

            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{borderRadius: '15px'}} >
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="username" name="username" className="form-control form-control-lg" onChange={this.handleChange} />
                                            <label className="form-label" for="username">Username (Between 3-20 characters)</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="email" name="email" className="form-control form-control-lg" onChange={this.handleChange}/>
                                            <label className="form-label" for="email">Email</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="password1" name="password1" className="form-control form-control-lg" onChange={this.handleChange} />
                                            <label className="form-label" for="password1">Password (Between 6-40 characters)</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="password" id="password2" name="password2" className="form-control form-control-lg" onChange={this.handleChange} />
                                            <label className="form-label" for="password2">Repeat your password</label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="button" onClick={this.handleRegister} className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/" className="fw-bold text-body"><u>Login here</u></Link></p>

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default SignUp;