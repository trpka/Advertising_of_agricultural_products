package com.example.diplomskibackend.controller;


import javax.servlet.http.HttpServletResponse;

import com.example.diplomskibackend.dto.RegisteredUserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import com.example.diplomskibackend.dto.AuthenticatedUserDTO;
import com.example.diplomskibackend.dto.UserDTO;
import com.example.diplomskibackend.dto.UserTokenState;
import com.example.diplomskibackend.exception.ResourceConflictException;
import com.example.diplomskibackend.model.User;
import com.example.diplomskibackend.security.auth.JwtAuthenticationRequest;
import com.example.diplomskibackend.service.UserService;
import com.example.diplomskibackend.util.TokenUtils;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthenticationController {

    @Autowired
    private TokenUtils tokenUtils;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    // Prvi endpoint koji pogadja korisnik kada se loguje.
    // Tada zna samo svoje korisnicko ime i lozinku i to prosledjuje na backend.
    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(
            @RequestBody JwtAuthenticationRequest authenticationRequest, HttpServletResponse response) {

        AuthenticatedUserDTO authenticatedUserDTO = new AuthenticatedUserDTO();
        User u = userService.findByUsername(authenticationRequest.getUsername());

        if(u!=null){

            Authentication authentication = authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                            authenticationRequest.getPassword()));

            SecurityContext ctx = SecurityContextHolder.createEmptyContext();
            SecurityContextHolder.setContext(ctx);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            User user = (User) authentication.getPrincipal();
            String jwt = tokenUtils.generateToken(user.getUsername());
            int expiresIn = tokenUtils.getExpiredIn();
            authenticatedUserDTO = new AuthenticatedUserDTO(user.getId(), user.getRole(), user.getUsername(), new UserTokenState(jwt, expiresIn));
            return new ResponseEntity<>(authenticatedUserDTO, HttpStatus.OK);}
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    // Endpoint za registraciju novog korisnika
    @PostMapping("/signup")
    public ResponseEntity<User> addUser(@RequestBody RegisteredUserDTO regUserRequest, UriComponentsBuilder ucBuilder) {

        User existUser = this.userService.findByUsername(regUserRequest.getUsername());

        if (existUser != null) {
            throw new ResourceConflictException(regUserRequest.getId(), "Username already exists");
        }

        User user = this.userService.save(regUserRequest);

        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
}
