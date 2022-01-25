import React, { Component, useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../App.css';
function AddAirports(props) {

    const [airport, setAirport] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/airports/single?id=" + id)
            .then(res => res.json())
            .then(result => {
                setAirport(result);
            })
    }, []);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAirport(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(airport)
        };
        fetch("http://localhost:8080/airports/load/single", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result));

        alert("Airport has been updated/added");
        navigate("../Airports")
        
    }
    
    

    console.log(airport);
    return (
        <div>
            <h1>Add/Update Airports Page</h1>
            <form style={{ border: '3px solid olive' }} className="airport-form" onSubmit={handleSubmit}>
                <div className="form-group row justify-content-center">
                    <label for="airportCode" className="col-sm-2 col-form-label"> Airport Code</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="airportCode" name="airportCode" value={airport ? airport.airportCode : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="airportName" className="col-sm-2 col-form-label"> Airport Name</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="airportName" name="airportName" value={airport ? airport.airportName : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="airportLocation" className="col-sm-2 col-form-label"> Airport Location</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="airportLocation" name="airportLocation" value={airport ? airport.airportLocation : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="otherDetails" className="col-sm-2 col-form-label"> Other Details</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="otherDetails" name="otherDetails" value={airport ? airport.otherDetails : null} onChange={handleChange} ></input>
                    </div>
                </div>
            </form>
            <button type="submit" class="btn btn-default btn-lg airports-submit-btn" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddAirports;