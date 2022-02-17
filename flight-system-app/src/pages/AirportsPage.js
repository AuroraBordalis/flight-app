import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../App.css';
class AirportsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            airports: []
        };
    }

    componentDidMount() {
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': token }
        };
        let response = fetch("http://localhost:8080/airports/all", requestOptions);
        response.then(res => res.json()).then(result => {
            this.setState({ airports: result })
        });
    }

    deleteAirport(airportCode) {
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Authorization': token }
        };
        if (window.confirm("Are you sure you want to delete " + airportCode)) {
            fetch("http://localhost:8080/airports/single?id=" + airportCode, requestOptions)
            .then(res => res.json()).then(result => {
                this.setState({airports: result})
            });

        }

    }


    render() {
        return (

            <div>
                <span className="airport-title">Airports</span>

                <Link type="button" className="btn btn-primary btn-lg add-airports" to="/AddAirports/-1"> Add Airport  </Link>

                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>Airport Code</th>
                            <th>Airport Name</th>
                            <th>Airport Location</th>
                            <th>Other Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.airports.map(airport => (
                            <tr key={airport.airportCode}>
                                <td>{airport.airportCode}</td>
                                <td>{airport.airportName}</td>
                                <td>{airport.airportLocation}</td>
                                <td>{airport.otherDetails}</td>
                                <td><Link to={"/AddAirports/" + airport.airportCode} className="btn-primary btn" >Edit</Link></td>
                                <td> <button onClick={() => this.deleteAirport(airport.airportCode)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AirportsPage;
