import React, { Component } from "react";
class ViewReservations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
        };
    }

    componentDidMount() {
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': token }
        };

        let response = fetch("http://localhost:8080/reservations/all", requestOptions);
        response.then(res => res.json()).then(result => {
            this.setState({ reservations: result }, this.initializer())
        });

    }

    deletereservation(reservationCode) {
        if (window.confirm("Are you sure you want to delete the reservation:" + reservationCode)) {
            let token = window.sessionStorage.getItem("token");
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Authorization': token }
            };

            fetch("http://localhost:8080/reservations/single?id=" + reservationCode, requestOptions)
                .then(res => res.json()).then(result => {
                    this.setState({ reservations: result }, this.initializer());
                });

        }

    }

    initializer() {
        let token = window.sessionStorage.getItem("token");
        const requestOptions = {
            method: 'GET',
            headers: { 'Authorization': token }
        };

        let anotherResponse = fetch("http://localhost:8080/flights/all",requestOptions);
        anotherResponse.then(res => res.json()).then(result => {
            let tempRes = [];
            this.state.reservations.forEach(reserve => {
                for (let i = 0; i < result.length; i++) {
                    if (result[i].flightNumber == reserve.flightNumber) {
                        reserve['origin'] = result[i].originAirportCode;
                        reserve['destination'] = result[i].destinationAirportCode;
                        tempRes.push(reserve);
                        break;
                    }
                }
            })
            this.setState({ reservations: tempRes });
        });
    }


    convertDate(date) {
        let myDate = new Date(Date.parse(date));
        return myDate.toString();
    }



    render() {
        return (

            <div>
                <span className="airport-title">Reservations</span>


                <table className="table table-striped table-success">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Flight Number</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Origin Airport</th>
                            <th>Destination Airport</th>
                            <th>Date Reservation Made</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.reservations.map(reservation => (
                            <tr key={reservation.id}>
                                <td>{reservation.id}</td>
                                <td>{reservation.flightNumber}</td>
                                <td>{reservation.firstName}</td>
                                <td>{reservation.lastName}</td>
                                <td>{reservation.origin}</td>
                                <td>{reservation.destination}</td>
                                <td>{this.convertDate(reservation.dateReservationMade)}</td>
                                <td> <button onClick={() => this.deletereservation(reservation.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ViewReservations;
