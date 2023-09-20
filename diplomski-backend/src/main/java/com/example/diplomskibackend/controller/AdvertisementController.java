package com.example.diplomskibackend.controller;


import com.example.diplomskibackend.dto.AdvertisementDTO;
import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.model.Advertisement;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.service.AdvertisementService;
import com.example.diplomskibackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AdvertisementController {

    @Autowired
    private AdvertisementService advertisementService;

    @RequestMapping(value="api/advertisement/{id}",method = RequestMethod.GET,produces=
            MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<AdvertisementDTO> getById(@PathVariable Long id){
        Advertisement advertisement =this.advertisementService.findById(id);
        return new ResponseEntity<>(new AdvertisementDTO(advertisement), HttpStatus.OK);
    }

    @RequestMapping(value="api/advertisement/save",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<AdvertisementDTO> save(@RequestBody AdvertisementDTO advertisementDTO){
        Advertisement advertisement=this.advertisementService.save(advertisementDTO);
        AdvertisementDTO advertisementDTO1=new AdvertisementDTO(advertisement);
        return new ResponseEntity<>(advertisementDTO1, HttpStatus.CREATED);
    }

    @RequestMapping(value="api/advertisements",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AdvertisementDTO>> findAll()
    {
        List<AdvertisementDTO> advertisementDTOS= this.advertisementService.findAll();
        return new ResponseEntity<>(advertisementDTOS, HttpStatus.OK);
    }
}
