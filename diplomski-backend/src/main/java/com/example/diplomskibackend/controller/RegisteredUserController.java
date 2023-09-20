package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.repository.RegisteredUserRepository;
import com.example.diplomskibackend.service.RegisteredUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class RegisteredUserController {

    @Autowired
    private RegisteredUserService registeredUserService;

    @RequestMapping(value="api/registered-user", method = RequestMethod.GET,
            params = "id",
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<RegisteredUserDTO> findById(@RequestParam Long id){
        RegisteredUser registeredUser=this.registeredUserService.findById(id);
        RegisteredUserDTO registeredUserDTO = new RegisteredUserDTO(registeredUser);
        return new ResponseEntity<>(registeredUserDTO,HttpStatus.OK);
    }

    @RequestMapping(value="/api/confirm-registration-register-user/{id}",method = RequestMethod.GET,produces=
            MediaType.APPLICATION_JSON_VALUE)
    public void confirmRegistrationForRegisteredUser(@PathVariable Long id) {
        //this.clientService.activateById(id);
        this.registeredUserService.save(this.registeredUserService.activateById(id));

    }

    @RequestMapping(value="api/registered-user/update",method = RequestMethod.PUT,
            consumes=MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('CLIENT')")
    public ResponseEntity<RegisteredUserDTO> update(@RequestBody RegisteredUserDTO registeredUser){

        RegisteredUser registeredUser1=this.registeredUserService.update(registeredUser);

        return new ResponseEntity<>(new RegisteredUserDTO(registeredUser1),HttpStatus.OK);
    }
}
