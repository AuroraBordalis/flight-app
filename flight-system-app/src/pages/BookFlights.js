import React, { Component } from "react";
import { Link } from "react-router-dom";


class BookFlights extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flights: [],
            searchAirport: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': token }
        };
        let response = fetch("http://localhost:8080/flights/all",requestOptions);
        response.then(res => res.json()).then(result => {
            this.setState({ flights: result })
        });
    }

    deleteflight(flightCode) {
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Authorization': token }
        };
        if (window.confirm("Are you sure you want to delete " + flightCode)) {
            fetch("http://localhost:8080/flights/single?id=" + flightCode, requestOptions)
                .then(res => res.json()).then(result => {
                    this.setState({ flights: result })
                });

        }

    }

    convertDate(date) {
        let myDate = new Date(Date.parse(date));
        return myDate.toString();
    }

    handleChange(event) {
        this.setState({ searchAirport: event.target.value });
    }

    handleSubmit() {
        let airportCode = this.state.searchAirport.toString().toUpperCase();
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': token }
        };
        let response = fetch("http://localhost:8080/flights/load/airport?airportCode=" + airportCode,requestOptions);
        response.then(res => res.json()).then(result => {
            this.setState({ flights: result })
        });

    }


    render() {
        return (

            <div>
                <span className="airport-title">Flights</span>
                <div className="input-group">
                    <input type="search" className="form-control rounded" placeholder="Search Airport" aria-label="Search" aria-describedby="search-addon" onChange={this.handleChange} />
                    <button type="button" className="btn btn-outline-primary" onClick={this.handleSubmit}>Search Airport Code</button>
                </div>
                <br></br>
                <table className="table table-striped table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th>Flight Number</th>
                            <th>Airline Code</th>
                            <th>Aircraft Code</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Fare</th>
                            <th>Departure Time</th>
                            <th>Arrival Time </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.flights.map(flight => (
                            <tr key={flight.flightNumber}>
                                <td>{flight.flightNumber}</td>
                                <td>{flight.airlineCode}</td>
                                <td>{flight.usualAircraftCode}</td>
                                <td>{flight.originAirportCode}</td>
                                <td>{flight.destinationAirportCode}</td>
                                <td>${flight.fare}</td>
                                <td>{this.convertDate(flight.departureDateTime)}</td>
                                <td>{this.convertDate(flight.arrivalDateTime)}</td>
                                <td><Link to={"/AddReservation/" + flight.flightNumber} className="btn-primary btn" >Book</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default BookFlights;