import React, { Component, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Login(props) {
    const [userDetails, setDetails] = useState([]);
    let navigate = useNavigate();
    const handleChange = (event) => {

        if (event.target != undefined) {
            const name = event.target.name;
            const value = event.target.value;
            setDetails(values => ({ ...values, [name]: value }))
        }
    }

    async function handleSubmit() {

        console.log(userDetails);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails)
        };
        let response = await fetch("http://localhost:8080/api/auth/signin", requestOptions);

        if(response.status == 200){
            let result = await response.json();
            console.log(result);
            window.sessionStorage.setItem("token", result.tokenType + " " + result.accessToken);
            console.log(window.sessionStorage.getItem("token"));
            
            navigate("/");

        }
            
        

        

        
    }
    return (
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ borderRadius: '15px' }} >
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Login</h2>

                                <form>

                                    <div className="form-outline mb-4">
                                        <input type="text" id="username" name="username" className="form-control form-control-lg" onChange={handleChange} />
                                        <label className="form-label" for="username">Username </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="password" name="password" className="form-control form-control-lg" onChange={handleChange} />
                                        <label className="form-label" for="password">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={handleSubmit}>Login</button>
                                    </div>

                                    

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;