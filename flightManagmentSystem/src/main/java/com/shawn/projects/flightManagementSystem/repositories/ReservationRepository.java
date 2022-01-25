package com.shawn.projects.flightManagementSystem.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.shawn.projects.flightManagementSystem.model.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {
	
	@Query("FROM reservations WHERE flight_number=?1")
	List<Reservation> findByFlight(int flightNumber);

}
