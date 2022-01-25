import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../App.css';

function getDate(date) {
    if (date != null) {
        let myDate = new Date(Date.parse(date));
        return myDate.toString();
    }

}

function FlightReservations(props) {

    const [reservations, setReservations] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        fetch("http://localhost:8080/reservations/flight?id=" + id)
            .then(res => res.json())
            .then(result => {
                setReservations(result);
            })




    }, []);





 





    return (
        <div>
            <h1>Customers for Flight:{id}</h1>
            <table className="table table-striped table-primary">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Date Reservation Made</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map(reservation => (
                            <tr key={reservation.id}>
                                <td>{reservation.id}</td>
                                <td>{reservation.firstName}</td>
                                <td>{reservation.lastName}</td>
                                <td>{getDate(reservation.dateReservationMade)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>


        </div>
    )
}

export default FlightReservations;