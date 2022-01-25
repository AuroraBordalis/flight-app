package com.shawn.projects.flightManagementSystem.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.shawn.projects.flightManagementSystem.model.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {
	
	@Query("FROM flight_schedules WHERE origin_airport_code= ?1 OR destination_airport_code =?1 ORDER BY airline_code")
	List<Flight> findbyAirport(String airportCode);
	
	@Query("FROM flight_schedules ORDER BY airline_code ")
	List<Flight> findAllGroup();

}
