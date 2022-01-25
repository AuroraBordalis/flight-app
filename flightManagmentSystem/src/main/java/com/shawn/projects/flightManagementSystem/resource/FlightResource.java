package com.shawn.projects.flightManagementSystem.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shawn.projects.flightManagementSystem.model.Airport;
import com.shawn.projects.flightManagementSystem.model.Flight;
import com.shawn.projects.flightManagementSystem.repositories.FlightRepository;

@CrossOrigin
@RestController
@RequestMapping(value="/flights")
public class FlightResource {
	
	@Autowired
	FlightRepository flightRepository;
	
	@GetMapping(value="/all")
	public List<Flight> getAllFlights(){
		return flightRepository.findAllGroup();
		
	}
	
	@GetMapping(value="/single")
	public Optional<Flight> getFlight(@RequestParam int id){
		return flightRepository.findById(id);
		
	}
	
	@PostMapping(value="/load/single")
	public List<Flight> persist(@RequestBody final Flight flight){
		flightRepository.save(flight);
		return flightRepository.findAllGroup();
	}
	
	@PostMapping(value = "/load/multiple")
	public List<Flight> persistMultiple(@RequestBody final List<Flight> flight){
		flightRepository.saveAll(flight);
		return flightRepository.findAllGroup();
	}
	
	@DeleteMapping(value="/single")
	public List<Flight> delete(@RequestParam int id) {
		flightRepository.deleteById(id);
		return flightRepository.findAllGroup();
		
	}
	
	@GetMapping(value="/load/airport")
	public List<Flight> getFlightsAirport(@RequestParam String airportCode){
		return flightRepository.findbyAirport(airportCode);
	}

}
