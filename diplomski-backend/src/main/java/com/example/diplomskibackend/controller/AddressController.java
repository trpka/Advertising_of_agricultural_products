package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.AdminDTO;
import com.example.diplomskibackend.model.Address;
import com.example.diplomskibackend.model.Admin;
import com.example.diplomskibackend.service.AddressService;
import com.example.diplomskibackend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AddressController {

    @Autowired
    private AddressService addressService;

    @RequestMapping(value="api/address", method = RequestMethod.GET,
            params = "id",
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<Address> findById(@RequestParam Long id){
        Address address=this.addressService.findById(id);
        return new ResponseEntity<>(address, HttpStatus.OK);
    }
}
