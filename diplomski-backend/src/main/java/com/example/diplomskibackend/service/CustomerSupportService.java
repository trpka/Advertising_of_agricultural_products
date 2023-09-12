package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.dto.CustomerSupportDTO;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.CustomerSupport;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.repository.AnnouncementRepository;
import com.example.diplomskibackend.repository.CustomerSupportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerSupportService {

    @Autowired
    private CustomerSupportRepository customerSupportRepository;
    @Autowired
    private RegisteredUserService registeredUserService;

    public CustomerSupportDTO save(CustomerSupportDTO customerSupportDTO)
    {
        RegisteredUser registeredUser = this.registeredUserService.findById(customerSupportDTO.getRegisteredUserId());

        CustomerSupport customerSupport= new CustomerSupport();
        customerSupport.setDate(customerSupportDTO.getDate());
        customerSupport.setQuestion(customerSupportDTO.getQuestion());
        customerSupport.setRegisteredUser(registeredUser);
        this.customerSupportRepository.save(customerSupport);

        return  new CustomerSupportDTO(customerSupport);
    }
}
