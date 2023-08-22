package com.app.service;

import com.app.dto.UserDto;
import com.app.entities.User;

public interface UserService {

	User addUser(UserDto user);
	
	User getUserById(Integer id);
	
	UserDto getUserByEmailAndPassword(String email,String password);
	
	String updatePassword(Integer id,String password);
}
