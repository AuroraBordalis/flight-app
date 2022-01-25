package com.shawn.projects.flightManagementSystem.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name="flight_schedules")
public class Flight {
	
	@Id
	@Column(name="flight_number")
	private int flightNumber;
	
	@Column(name="airline_code")
	private String airlineCode;
	
	@Column(name="usual_aircraft_code")
	private String usualAircraftCode;
	
	@Column(name="origin_airport_code")
	private String originAirportCode;
	
	@Column(name="fare")
	private int fare;
	
	public int getFare() {
		return fare;
	}

	public void setFare(int fare) {
		this.fare = fare;
	}

	public int getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getAirlineCode() {
		return airlineCode;
	}

	public void setAirlineCode(String airlineCode) {
		this.airlineCode = airlineCode;
	}

	public String getUsualAircraftCode() {
		return usualAircraftCode;
	}

	public void setUsualAircraftCode(String usualAircraftCode) {
		this.usualAircraftCode = usualAircraftCode;
	}

	public String getOriginAirportCode() {
		return originAirportCode;
	}

	public void setOriginAirportCode(String originAirportCode) {
		this.originAirportCode = originAirportCode;
	}

	public String getDestinationAirportCode() {
		return destinationAirportCode;
	}

	public void setDestinationAirportCode(String destinationAirportCode) {
		this.destinationAirportCode = destinationAirportCode;
	}

	public Date getDepartureDateTime() {
		return departureDateTime;
	}

	public void setDepartureDateTime(Date departureDateTime) {
		this.departureDateTime = departureDateTime;
	}



	public Date getArrivalDateTime() {
		return arrivalDateTime;
	}

	public void setArrivalDateTime(Date arrivalDateTime) {
		this.arrivalDateTime = arrivalDateTime;
	}



	@Column(name="destination_airport_code")
	private String destinationAirportCode;
	
	
	@Column(name = "departure_date_time")
	@Temporal(TemporalType.TIMESTAMP)
	private Date departureDateTime;
	
	@Column(name = "arrival_date_time")
	@Temporal(TemporalType.TIMESTAMP)
	private Date arrivalDateTime;
}
