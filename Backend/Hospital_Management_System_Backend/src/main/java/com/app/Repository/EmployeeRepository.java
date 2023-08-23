package com.app.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{

}
