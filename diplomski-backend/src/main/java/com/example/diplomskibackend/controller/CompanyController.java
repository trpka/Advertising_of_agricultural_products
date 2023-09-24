package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.AdminDTO;
import com.example.diplomskibackend.dto.AnnouncementPageDTO;
import com.example.diplomskibackend.dto.CompanyDTO;
import com.example.diplomskibackend.dto.CompanyPageDTO;
import com.example.diplomskibackend.model.Admin;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Company;
import com.example.diplomskibackend.service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @RequestMapping(value="api/company/activation-requirements", params= {"page","size"},method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<CompanyPageDTO> findAll(Pageable pageable){
        Page<Company> companies = this.companyService.findAllCompaniesActivationRequirements(pageable);
        CompanyPageDTO companyPageDTO =new CompanyPageDTO(this.companyService.convert(companies.getContent()), companies.isLast());
        return new ResponseEntity<>(companyPageDTO,HttpStatus.OK);
    }
    @RequestMapping(value="/api/company/activate/{id}",method = RequestMethod.GET,produces=
            MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CompanyDTO> activateUser(@PathVariable Long id){
        CompanyDTO companyDTO = this.companyService.activateCompany(id);
        return new ResponseEntity<>(companyDTO,HttpStatus.OK);
    }
    @RequestMapping(value="/api/company/deactivate/{id}",method = RequestMethod.GET,produces=
            MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> deactivateUser(@PathVariable Long id){
         Boolean delete = this.companyService.deactivateCompany(id);
        return new ResponseEntity<>(delete,HttpStatus.OK);
    }
}
