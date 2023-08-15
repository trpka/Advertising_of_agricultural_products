package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.model.User;
import com.example.diplomskibackend.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/users")
public class UserController {

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private EmailService emailService;

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



}
