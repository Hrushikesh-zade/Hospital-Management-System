package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.Repository.UserRepository;
import com.app.dto.UserDto;
import com.app.entities.User;
import com.app.exception_handler.ResourceNotFoundException;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repo ;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private PasswordEncoder enc;
	
	
	@Override
	public User addUser(UserDto user) {
		// TODO Auto-generated method stub
		
		user.setPassword(enc.encode(user.getPassword()));
		return repo.save(mapper.map(user, User.class)) ;
	}

	@Override
	public User getUserById(Integer id) {
		// TODO Auto-generated method stub
		return repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
	}

	@Override
	public UserDto getUserByEmailAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		
		User u = repo.findByEmailAndPassword(email, password).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
		
		
		return mapper.map(u, UserDto.class);
	}

	@Override
	public String updatePassword(Integer id,String password) {
		// TODO Auto-generated method stub
		
		User u = repo.findById(id).orElseThrow(()-> new ResourceNotFoundException("User Not Found"));
		
		u.setPassword(password);
		
		return "password changed successfully";
	}

}
