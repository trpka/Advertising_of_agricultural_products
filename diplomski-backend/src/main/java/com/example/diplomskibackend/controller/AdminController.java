package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.AdminDTO;
import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.model.Admin;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.service.AdminService;
import com.example.diplomskibackend.service.RegisteredUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value="api/admin", method = RequestMethod.GET,
            params = "id",
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<AdminDTO> findById(@RequestParam Long id){
        Admin admin=this.adminService.findById(id);
        AdminDTO adminDTO = new AdminDTO(admin);
        return new ResponseEntity<>(adminDTO, HttpStatus.OK);
    }
}
