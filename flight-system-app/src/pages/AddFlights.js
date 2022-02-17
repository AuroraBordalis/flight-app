import React, { Component, useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../App.css';
import "react-datetime/css/react-datetime.css";
import Datetime from 'react-datetime';

function getDate(date) {
    if (date != null) {
        return new Date(Date.parse(date));;
    }

}

function AddFlights(props) {

    const [flight, setFlight] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();


    const departureDateTime = React.createRef();
    const arrivalDateTime = React.createRef();

    useEffect(() => {
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': token }
        };
        fetch("http://localhost:8080/flights/single?id=" + id,requestOptions)
            .then(res => res.json())
            .then(result => {
                setFlight(result);
            })
    }, []);

    const handleChange = (event) => {

        if (event.target != undefined) {
            const name = event.target.name;
            const value = event.target.value;
            setFlight(values => ({ ...values, [name]: value }))
        }
    }




    const handleSubmit = (event) => {

        console.log(departureDateTime.values);
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem("token")  },
            body: JSON.stringify(flight)
        };
        fetch("http://localhost:8080/flights/load/single", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result));

        alert("Flight has been updated/added");
        navigate("../Flights");
        
    }

    const handleDateDepChange = date => {

        console.log('date', date.toDate());
        let myDate = date.toDate();
        setFlight(values => ({ ...values, ['departureDateTime']: myDate }));
   
    }

    const handleDateArrChange = date => {

        console.log('date', date.toDate());
        let myDate = date.toDate();
        setFlight(values => ({ ...values, ['arrivalDateTime']: myDate }));

    }




    return (
        <div>
            <h1>Add/Update Flights Page</h1>
            <form style={{ border: '3px solid orange' }} className="airport-form" onSubmit={handleSubmit}>
                <div className="form-group row justify-content-center">
                    <label for="flightNumber" className="col-sm-2 col-form-label"> Flight Number</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="flightNumber" name="flightNumber" value={flight ? flight.flightNumber : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="airlineCode" className="col-sm-2 col-form-label"> Airline Code</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="airlineCode" name="airlineCode" value={flight ? flight.airlineCode : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="usualAircraftCode" className="col-sm-2 col-form-label"> Aircraft Code</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="usualAircraftCode" name="usualAircraftCode" value={flight ? flight.usualAircraftCode : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="originAirportCode" className="col-sm-2 col-form-label"> Origin </label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="originAirportCode" name="originAirportCode" value={flight ? flight.originAirportCode : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="destinationAirportCode" className="col-sm-2 col-form-label">Destination</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="destinationAirportCode" name="destinationAirportCode" value={flight ? flight.destinationAirportCode : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="fare" className="col-sm-2 col-form-label">Fare($)</label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="fare" name="fare" value={flight ? flight.fare : null} onChange={handleChange} ></input>
                    </div>
                </div>
                <div>
                    <div className="form-group row justify-content-center">
                        <label for="departureDateTime" className="col-sm-2 col-form-label"> Departure Time</label>
                        <div className="col-sm-6">
                            <Datetime ref={departureDateTime} value={flight ? getDate(flight.departureDateTime) : null} id="departureDateTime" name="departureDateTime" onChange={handleDateDepChange} ></Datetime>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="arrivalDateTime" className="col-sm-2 col-form-label"> Arrival Time</label>
                        <div className="col-sm-6">
                            <Datetime ref={arrivalDateTime} id="arrivalDateTime" name="arrivaleDateTime" onChange={handleDateArrChange} value={flight ? getDate(flight.arrivalDateTime) : null} />
                        </div>
                    </div>
                </div>
            </form>
            <button type="submit" class="btn btn-default btn-lg airports-submit-btn" onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default AddFlights;