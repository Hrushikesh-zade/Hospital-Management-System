package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.LoginRequestDto;
import com.app.service.UserService;

import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/users")
@NoArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	private UserService service;
	
	
	@PostMapping("/login")
	public ResponseEntity<?> getUserDetails(@RequestBody LoginRequestDto dto){
		return new ResponseEntity<>(service.getUserByEmailAndPassword(dto.getEmail(), dto.getPassword()), HttpStatus.OK);
	}
	
	@PutMapping("/changePassword/{userId}")
	public ResponseEntity<?> updateUserPassword(@PathVariable Integer userId, @RequestBody String password){
		return new ResponseEntity<>(new ApiResponse(service.updatePassword(userId, password)), HttpStatus.OK);
	}
}
