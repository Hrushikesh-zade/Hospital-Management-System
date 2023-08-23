package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Integer>{

}
