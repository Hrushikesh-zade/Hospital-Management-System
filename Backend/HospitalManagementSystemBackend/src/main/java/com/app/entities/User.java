package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Integer userId;
	
	@Column(name = "first_name",length = 20,nullable = false)
	private String firstName;
	
	@Column(name = "last_name",length = 20,nullable = false)
	private String lastName;
	
	@Column(name = "email",length = 20,nullable = false,unique = true)
	private String email;
	
	private String password;
	
	@Transient
	private String confirmPassword;
	
	@Enumerated(EnumType.STRING)
	private Role role;
	
	private LocalDate dob;
	
	@Enumerated(EnumType.STRING)
	private Gender gender;
	
	@Column(name = "contact")
	private double contactNo;

	public User(String firstName, String lastName, String email, String password, String confirmPassword, Role role,
			double contactNo) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.confirmPassword = confirmPassword;
		this.role = role;
		this.contactNo = contactNo;
	}
	
	
}
