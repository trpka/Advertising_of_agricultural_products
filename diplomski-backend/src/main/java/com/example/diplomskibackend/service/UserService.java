package com.example.diplomskibackend.service;


import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.diplomskibackend.dto.CompanyAddressDTO;
import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.model.*;
import com.example.diplomskibackend.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.diplomskibackend.dto.UserDTO;
import com.example.diplomskibackend.repository.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthorityService authorityService;

    @Autowired
    private RegisteredUserService registeredUserService;

    @Autowired
    private CompanyService companyService;


    public User findByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username);
    }

    public User findById(Long id) throws AccessDeniedException {
        return userRepository.findById(id).orElseGet(null);
    }

    public User findById1(Long id) {
        Optional<User> userOpt=this.userRepository.findById(id);
        if (!userOpt.isPresent()) {
            return null;
        }
        return userOpt.get();
    }

    public List<UserDTO> findAll() throws AccessDeniedException {
        List<User> users=userRepository.findAll();
        List<UserDTO> usersDTO=new ArrayList<>();
        for (User u : users) {
            if(!(u.getRole().equalsIgnoreCase("SysAdmin") || u.getRole().equalsIgnoreCase("Admin"))) {
                UserDTO dto=new UserDTO(u.getId(),u.getUsername(),u.getPassword(),u.getEmail(),/*u.getFirstName(),u.getLastName(),*/ u.getMobile(),u.isEnabled(), u.getRole());
                usersDTO.add(dto);
            }


        }
        return usersDTO;
    }


    public User save(RegisteredUserDTO regUserRequest) {
        User u = new User();
        u.setUsername(regUserRequest.getUsername());

        // pre nego sto postavimo lozinku u atribut hesiramo je kako bi se u bazi nalazila hesirana lozinka
        // treba voditi racuna da se koristi isi password encoder bean koji je postavljen u AUthenticationManager-u kako bi koristili isti algoritam
        u.setPassword(passwordEncoder.encode(regUserRequest.getPassword()));

        //postavljeno na true
        u.setEnabled(false);
        u.setEmail(regUserRequest.getEmail());

        u.setMobile(regUserRequest.getMobile());
        u.setRole(regUserRequest.getRole());

        // u primeru se registruju samo obicni korisnici i u skladu sa tim im se i dodeljuje samo rola USER
        List<Authority> authorities=new ArrayList<>();
        //User newUser=new User();

        RegisteredUser newRegisteredUser=new RegisteredUser();

        if(u.getRole().equalsIgnoreCase("RegisteredUser")) {
            authorities = authorityService.findByName("ROLE_REGISTERED_USER");
            u.setAuthorities(authorities);
            RegisteredUser registeredUser=new RegisteredUser(u.getUsername(),u.getPassword(),u.getEmail(),u.getMobile(),u.isEnabled(),u.getRole(),authorities,regUserRequest.getFirstName1(),regUserRequest.getLastName1());
            newRegisteredUser=this.registeredUserService.save(registeredUser);
            u.setId(newRegisteredUser.getId());
        }


        System.out.println("id iz userService"+ u.getId());
        return u;
    }

    public User signUpCompany(CompanyAddressDTO companyAddressDTO){

        Address address = new Address();

        address.setCity(companyAddressDTO.getAddress().getCity());
        address.setStreet(companyAddressDTO.getAddress().getStreet());
        address.setZipCode(companyAddressDTO.getAddress().getZipCode());
        address.setCountry("Serbia");
        this.addressRepository.save(address);

        User user = new User();
        user.setUsername(companyAddressDTO.getCompanyDTO().getUsername());
        user.setPassword(passwordEncoder.encode(companyAddressDTO.getCompanyDTO().getPassword()));
        user.setLastPasswordResetDate(new Timestamp(System.currentTimeMillis()));
        user.setEnabled(false);
        user.setEmail(companyAddressDTO.getCompanyDTO().getEmail());
        user.setMobile(companyAddressDTO.getCompanyDTO().getMobile());
        user.setRole(companyAddressDTO.getCompanyDTO().getRole());
        List<Authority> authorities=new ArrayList<>();

        Company newCompany = new Company();

        if(user.getRole().equalsIgnoreCase("Company")) {
            authorities = authorityService.findByName("ROLE_COMPANY");
            user.setAuthorities(authorities);
            Company company=new Company(user.getUsername(),user.getPassword(),user.getEmail(),user.getMobile(),user.isEnabled(),user.getRole(),authorities,companyAddressDTO.getCompanyDTO().getName(),companyAddressDTO.getCompanyDTO().getRegNumOfCompany(),address);
            newCompany=this.companyService.save(company);
            user.setId(newCompany.getId());
        }
        return user;
    }

}