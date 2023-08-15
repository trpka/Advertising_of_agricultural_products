package com.example.diplomskibackend.service;


import com.example.diplomskibackend.model.RegisteredUser;

import com.example.diplomskibackend.repository.RegisteredUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RegisteredUserService {

    @Autowired
    private RegisteredUserRepository registeredUserRepository;

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
}
