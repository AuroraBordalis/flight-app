package com.shawn.projects.flightManagementSystem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shawn.projects.flightManagementSystem.model.Airport;

public interface AirportRepository extends JpaRepository<Airport, String> {

}
