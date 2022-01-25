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

import com.shawn.projects.flightManagementSystem.model.Flight;
import com.shawn.projects.flightManagementSystem.model.Reservation;
import com.shawn.projects.flightManagementSystem.repositories.ReservationRepository;

@CrossOrigin
@RestController
@RequestMapping(value="/reservations")
public class ReservationResource {
	
	@Autowired
	ReservationRepository reservationRepository;
	
	@GetMapping(value="/all")
	public List<Reservation> getAllReservations(){
		return reservationRepository.findAll();
		
	}
	
	@GetMapping(value="/single")
	public Optional<Reservation> getReservation(@RequestParam int id){
		return reservationRepository.findById(id);
		
	}
	
	@PostMapping(value="/load/single")
	public List<Reservation> persist(@RequestBody final Reservation reservation){
		reservationRepository.save(reservation);
		return reservationRepository.findAll();
	}
	
	@PostMapping(value = "/load/multiple")
	public List<Reservation> persistMultiple(@RequestBody final List<Reservation> reservations){
		reservationRepository.saveAll(reservations);
		return reservationRepository.findAll();
	}
	
	@DeleteMapping(value="/single")
	public List<Reservation> delete(@RequestParam int id) {
		reservationRepository.deleteById(id);
		return reservationRepository.findAll();
		
	}
	
	@GetMapping(value="flight")
	public List<Reservation> getFlightReservations(@RequestParam int id){
		return reservationRepository.findByFlight(id);
		
	}

}
