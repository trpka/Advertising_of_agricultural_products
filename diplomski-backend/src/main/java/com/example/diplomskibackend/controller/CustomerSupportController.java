package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.dto.CustomerSupportDTO;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.CustomerSupport;
import com.example.diplomskibackend.service.AnnouncementService;
import com.example.diplomskibackend.service.CustomerSupportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CustomerSupportController {

    @Autowired
    private CustomerSupportService customerSupportService;

    @RequestMapping(value="api/customer-support",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<CustomerSupportDTO> save(@RequestBody CustomerSupportDTO customerSupportDTO){
        CustomerSupportDTO customerSupportDTO1=this.customerSupportService.save(customerSupportDTO);
        return new ResponseEntity<>(customerSupportDTO1, HttpStatus.CREATED);
    }
}
