package com.shawn.projects.flightManagementSystem.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity(name = "reservations")
public class Reservation {
	
	@Id   
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column
	private int id;
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Column(name = "flight_number")
	private int flightNumber;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "date_reservation_made")
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateReservationMade;

	public int getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDateReservationMade() {
		return dateReservationMade;
	}

	public void setDateReservationMade(Date dateReservationMade) {
		this.dateReservationMade = dateReservationMade;
	}
	
	
	
	
	

}
