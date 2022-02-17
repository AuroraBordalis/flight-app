package com.shawn.projects.flightManagementSystem.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shawn.projects.flightManagementSystem.model.ERole;
import com.shawn.projects.flightManagementSystem.model.Role;
@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
