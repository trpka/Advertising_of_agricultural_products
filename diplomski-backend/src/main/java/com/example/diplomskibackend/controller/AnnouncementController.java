package com.example.diplomskibackend.controller;


import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.service.AnnouncementService;
import com.example.diplomskibackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @RequestMapping(value="api/announcement",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<AnnouncementDTO> save(@RequestBody Announcement announcement){
        AnnouncementDTO announcementDTO=this.announcementService.save(announcement);
        return new ResponseEntity<>(announcementDTO, HttpStatus.CREATED);
    }

    @RequestMapping(value="api/announcements",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AnnouncementDTO>> findAll()
    {
        List<AnnouncementDTO> terms= this.announcementService.findAll();
        return new ResponseEntity<>(terms, HttpStatus.OK);
    }

    @RequestMapping(value="api/announcements/mechanization",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AnnouncementDTO>> findAllMechanization()
    {
        List<AnnouncementDTO> terms= this.announcementService.findAllMechanization();
        return new ResponseEntity<>(terms, HttpStatus.OK);
    }

}
