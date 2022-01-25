import React, { Component, useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import '../App.css';

function getDate(date) {
    if (date != null) {
        let myDate = new Date(Date.parse(date));
        return myDate.toString();
    }

}

function AddReservation(props) {

    const [flight, setFlight] = useState([]);
    const [reservation, setReservation] = useState([]);
    const { id } = useParams();
    let navigate = useNavigate();
    let [onLoad, setOnLoad] = useState(true);

    useEffect(() => {
        if (onLoad) {
            fetch("http://localhost:8080/flights/single?id=" + id)
                .then(res => res.json())
                .then(result => {
                    setFlight(result);
                })
        }
        else {

            setReservation(values => ({ ...values, ['dateReservationMade']: new Date() }));
            setReservation(values => ({ ...values, ['flightNumber']: flight.flightNumber }));

        }



    }, [onLoad]);

    const handleChange = (event) => {

        if (event.target != undefined) {
            setOnLoad(false);
            const name = event.target.name;
            const value = event.target.value;
            setReservation(values => ({ ...values, [name]: value }));
        }
    }




    const handleSubmit = (event) => {


        event.preventDefault();




        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reservation)
        };
        if (window.confirm("Are you sure you want to reserve this flight?")) {
            fetch("http://localhost:8080/reservations/load/single", requestOptions)
                .then(response => response.json())
                .then(result => console.log(result));

            navigate("../BookFlightsPage");
        }

    }





    return (
        <div>
            <h1>Book Flight</h1>
            <form style={{ border: '3px solid green' }} className="airport-form" onSubmit={handleSubmit}>
                <div className="form-group row justify-content-center">
                    <label for="flightNumber" className="col-sm-2 col-form-label"> Flight Number: {flight.flightNumber}</label>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="airlineCode" className="col-sm-2 col-form-label"> Airline Code: {flight.airlineCode}</label>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="originAirportCode" className="col-sm-2 col-form-label">{flight.originAirportCode} to {flight.destinationAirportCode} </label>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="fare" className="col-sm-2 col-form-label">Fare: ${flight.fare}</label>
                </div>
                <div>
                    <div className="form-group row justify-content-center">
                        <label for="departureDateTime" className="col-sm-2 col-form-label"> Departure Time: {getDate(flight.departureDateTime)}</label>
                    </div>
                    <div className="form-group row justify-content-center">
                        <label for="arrivalDateTime" className="col-sm-2 col-form-label"> Arrival Time: {getDate(flight.arrivalDateTime)}</label>
                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="firstName" className="col-sm-2 col-form-label"> First Name </label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} ></input>

                    </div>
                </div>
                <div className="form-group row justify-content-center">
                    <label for="lastName" className="col-sm-2 col-form-label"> Last Name </label>
                    <div className="col-sm-6">
                        <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} ></input>
                    </div>
                </div>
            </form>
            <button type="submit" class="btn btn-default btn-lg airports-submit-btn" onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default AddReservation;