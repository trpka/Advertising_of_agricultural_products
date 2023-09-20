package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.AdvertisementDTO;
import com.example.diplomskibackend.dto.CompanyAddressDTO;
import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.model.Advertisement;
import com.example.diplomskibackend.model.User;
import com.example.diplomskibackend.service.EmailService;
import com.example.diplomskibackend.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private EmailService emailService;
    @Autowired
    private UserService userService;

    @GetMapping
    public String getNew(Model model) {
        model.addAttribute("user", new User());
        return "registration";
    }

    @PostMapping("/signup/async")
    public String signUpAsync(@RequestBody RegisteredUserDTO regUserDTO){

        //slanje emaila
        try {
            System.out.println("Thread id: " + Thread.currentThread().getId());
            emailService.sendNotificaitionAsync(regUserDTO);
        }catch( Exception e ){
            logger.info("Greska prilikom slanja emaila: " + e.getMessage());
        }

        return "success";
    }

    @RequestMapping(value="/signup/company",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<User> signUpCompany(@RequestBody CompanyAddressDTO companyAddressDTO){
        User user=this.userService.signUpCompany(companyAddressDTO);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }



}
