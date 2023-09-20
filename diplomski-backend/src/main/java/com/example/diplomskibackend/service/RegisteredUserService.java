package com.example.diplomskibackend.service;


import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.model.RegisteredUser;

import com.example.diplomskibackend.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegisteredUserService {

    @Autowired
    private RegisteredUserRepository registeredUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    public RegisteredUser findById(Long id) {
        Optional<RegisteredUser> registeredUserOpt=this.registeredUserRepository.findById(id);
        if (!registeredUserOpt.isPresent()) {
            return null;
        }
        return registeredUserOpt.get();
    }

    public RegisteredUser save(RegisteredUser newRegUser) {
        return this.registeredUserRepository.save(newRegUser);
    }

    public RegisteredUser activateById(Long id) {
        Optional<RegisteredUser> registeredUserOpt= Optional.ofNullable(this.findById(id));
        if(!registeredUserOpt.isPresent()) {
            return null;
        }
        RegisteredUser registeredUser=registeredUserOpt.get();
        registeredUser.setEnabled(true);
        //client.setEnabled(true);
        return registeredUser;
    }

    public RegisteredUser update(RegisteredUserDTO registeredUser) {

        RegisteredUser registeredUser1 = this.findById(registeredUser.getId());
        registeredUser1.setFirstName1(registeredUser.getFirstName1());
        registeredUser1.setLastName1(registeredUser.getLastName1());
        registeredUser1.setUsername(registeredUser.getUsername());
        registeredUser1.setPassword(passwordEncoder.encode(registeredUser.getPassword()));

        registeredUser1.setEmail(registeredUser.getEmail());
        registeredUser1.setMobile(registeredUser.getMobile());

        return this.save(registeredUser1);
    }
}
