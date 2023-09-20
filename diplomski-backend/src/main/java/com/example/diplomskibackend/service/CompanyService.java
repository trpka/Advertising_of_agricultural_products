package com.example.diplomskibackend.service;

import com.example.diplomskibackend.model.Company;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.repository.CompanyRepository;
import com.example.diplomskibackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

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
}
