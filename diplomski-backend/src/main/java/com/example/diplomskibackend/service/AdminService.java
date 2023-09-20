package com.example.diplomskibackend.service;

import com.example.diplomskibackend.model.Admin;
import com.example.diplomskibackend.model.Company;
import com.example.diplomskibackend.repository.AdminRepository;
import com.example.diplomskibackend.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public Admin findById(Long id) {
        Optional<Admin> adminOpt=this.adminRepository.findById(id);
        if (!adminOpt.isPresent()) {
            return null;
        }
        return adminOpt.get();
    }
}
