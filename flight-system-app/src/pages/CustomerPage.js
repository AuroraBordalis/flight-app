import React, { Component } from "react";
import { Link } from "react-router-dom";
class CustomerPage extends Component {
    render() {
        return (

            <div>
                <Link className="btn btn-secondary btn-lg" to="/BookFlightsPage">Book Flight</Link>
                <Link className="btn btn-secondary btn-lg" to="/Reservations">View Reservations</Link>
        
            </div>
        )
    }
}

export default CustomerPage;
