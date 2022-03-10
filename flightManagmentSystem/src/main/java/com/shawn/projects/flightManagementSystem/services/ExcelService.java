package com.shawn.projects.flightManagementSystem.services;

import java.io.ByteArrayInputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shawn.projects.flightManagementSystem.model.Airport;
import com.shawn.projects.flightManagementSystem.model.Flight;
import com.shawn.projects.flightManagementSystem.model.Reservation;
import com.shawn.projects.flightManagementSystem.model.User;
import com.shawn.projects.flightManagementSystem.repositories.AirportRepository;
import com.shawn.projects.flightManagementSystem.repositories.FlightRepository;
import com.shawn.projects.flightManagementSystem.repositories.ReservationRepository;
import com.shawn.projects.flightManagementSystem.repositories.UserRepository;

@Service 
public class ExcelService {
	
	@Autowired
	AirportRepository airportRepository;
	
	@Autowired
	FlightRepository flightRepository;
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public ByteArrayInputStream load() {
		List<Airport> airports = airportRepository.findAll();
		List<Flight> flights = flightRepository.findAllGroup();
		List<Reservation> reservations = reservationRepository.findAll();
		List<User> users = userRepository.findAll();
		ByteArrayInputStream in = ExcelHelper.dataToExcel(airports, flights, reservations, users);
		return in;
		
	}

}
