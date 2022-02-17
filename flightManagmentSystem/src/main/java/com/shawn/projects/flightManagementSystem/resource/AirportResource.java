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
import com.shawn.projects.flightManagementSystem.repositories.AirportRepository;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value="/airports")
public class AirportResource {
	
	@Autowired
	AirportRepository airportRepository; 
	
	@GetMapping(value="/all")
	public List<Airport> getAllAirports(){
		return airportRepository.findAll();
		
	}
	
	@GetMapping(value="/single")
	public Optional<Airport> getAirport(@RequestParam String id){
		return airportRepository.findById(id);
		
	}
	
	@PostMapping(value="/load/single")
	public List<Airport> persist(@RequestBody final Airport airport){
		airportRepository.save(airport);
		return airportRepository.findAll();
	}
	
	@PostMapping(value = "/load/multiple")
	public List<Airport> persistMultiple(@RequestBody final List<Airport> airport){
		airportRepository.saveAll(airport);
		return airportRepository.findAll();
	}
	
	@DeleteMapping(value="/single")
	public List<Airport> delete(@RequestParam String id) {
		airportRepository.deleteById(id);
		return airportRepository.findAll();
		
	}
	
}
