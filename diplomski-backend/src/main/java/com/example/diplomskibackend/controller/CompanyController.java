package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CompanyController {

    @Autowired
    private CompanyService companyService;
}
