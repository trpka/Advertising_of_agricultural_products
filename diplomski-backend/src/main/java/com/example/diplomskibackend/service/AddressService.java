package com.example.diplomskibackend.service;

import com.example.diplomskibackend.model.Address;
import com.example.diplomskibackend.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AddressService {

    @Autowired
    private AddressRepository addressRepository;

    public Address findById(Long id) {
        Optional<Address> addressOpt=this.addressRepository.findById(id);
        if (!addressOpt.isPresent()) {
            return null;
        }
        return addressOpt.get();
    }
}
