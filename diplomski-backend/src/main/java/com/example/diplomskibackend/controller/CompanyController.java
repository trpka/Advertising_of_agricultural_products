package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.AdminDTO;
import com.example.diplomskibackend.dto.CompanyDTO;
import com.example.diplomskibackend.model.Admin;
import com.example.diplomskibackend.model.Company;
import com.example.diplomskibackend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @RequestMapping(value="api/company", method = RequestMethod.GET,
            params = "id",
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<CompanyDTO> findById(@RequestParam Long id){
        Company company=this.companyService.findById(id);
        CompanyDTO companyDTO = new CompanyDTO(company);
        return new ResponseEntity<>(companyDTO, HttpStatus.OK);
    }
}
