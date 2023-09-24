package com.example.diplomskibackend.service;

import com.example.diplomskibackend.controller.UserController;
import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.dto.CompanyDTO;
import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Company;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.repository.CompanyRepository;
import com.example.diplomskibackend.repository.ProductRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;
    @Autowired
    private EmailService emailService;

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    public Company findById(Long id) {
        Optional<Company> companyOpt=this.companyRepository.findById(id);
        if (!companyOpt.isPresent()) {
            return null;
        }
        return companyOpt.get();
    }

    public Company save(Company company) {
        return this.companyRepository.save(company);
    }

    public Page<Company> findAllCompaniesActivationRequirements(Pageable page) {
        Page<Company> companies = this.companyRepository.findByEnabledFalse(page);

        return companies;
    }
    public CompanyDTO activateCompany(Long id) {
        Company company = this.findById(id);
        company.setEnabled(true);
        Company savedCompany = this.companyRepository.save(company);
        CompanyDTO companyDTO=new CompanyDTO(company);
        try {
            System.out.println("Thread id: " + Thread.currentThread().getId());
            this.emailService.sendNotificaitionForCompanyActivationAsync(companyDTO);
        }catch( Exception e ){
            logger.info("Greska prilikom slanja emaila: " + e.getMessage());
            Thread.currentThread().interrupt();
        }
        return new CompanyDTO(savedCompany);
    }
    public Boolean deactivateCompany(Long id) {
        Company company = this.findById(id);
        CompanyDTO companyDTO=new CompanyDTO(company);
        try {
            System.out.println("Thread id: " + Thread.currentThread().getId());
            this.emailService.sendNotificaitionForCompanyActivationAsync(companyDTO);
        }catch( Exception e ){
            logger.info("Greska prilikom slanja emaila: " + e.getMessage());
            Thread.currentThread().interrupt();
        }
        this.companyRepository.deleteById(id);
        return true;
    }

    public List<CompanyDTO> convert(List<Company> companies){
        List<CompanyDTO> companyDTOS = new ArrayList<>();
        for(Company company: companies){
            CompanyDTO companyDTO = new CompanyDTO(company);
            companyDTOS.add(companyDTO);
        }
        return companyDTOS;
    }
}
