package com.shawn.projects.flightManagementSystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="airports")
public class Airport {
	
	@Id
	@Column(name = "airport_code")
	private String airportCode;
	
	@Column(name = "airport_name")
	private String airportName;
	
	@Column(name = "airport_location")
	private String airportLocation;
	
	@Column(name = "other_details")
	private String otherDetails;
	
	public Airport() {
		
	}

	public String getAirportCode() {
		return airportCode;
	}

	public void setAirportCode(String airportCode) {
		this.airportCode = airportCode;
	}

	public String getAirportName() {
		return airportName;
	}

	public void setAirportName(String airportName) {
		this.airportName = airportName;
	}

	public String getAirportLocation() {
		return airportLocation;
	}

	public void setAirportLocation(String airportLocation) {
		this.airportLocation = airportLocation;
	}

	public String getOtherDetails() {
		return otherDetails;
	}

	public void setOtherDetails(String otherDetails) {
		this.otherDetails = otherDetails;
	}
	

}
