package com.example.diplomskibackend.controller;


import com.example.diplomskibackend.dto.*;
import com.example.diplomskibackend.model.Advertisement;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Company;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.service.AdvertisementService;
import com.example.diplomskibackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @RequestMapping(value="api/advertisements/active",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AdvertisementDTO>> findAllActive()
    {
        List<AdvertisementDTO> advertisementDTOS= this.advertisementService.findAllActive();
        return new ResponseEntity<>(advertisementDTOS, HttpStatus.OK);
    }

    @RequestMapping(value="api/advertisements/inactive", params= {"page","size"},method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<AdvertisementPageDTO> findAllInactive(Pageable pageable){
        Page<Advertisement> advertisements = this.advertisementService.findAllInactive(pageable);
        AdvertisementPageDTO advertisementPageDTO =new AdvertisementPageDTO(this.advertisementService.convertToDto(advertisements.getContent()), advertisements.isLast());
        return new ResponseEntity<>(advertisementPageDTO,HttpStatus.OK);
    }

    @RequestMapping(value="api/advertisement/allow-posting-of-advertisement",method = RequestMethod.PUT,
            consumes=MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('CLIENT')")
    public ResponseEntity<AdvertisementDTO> allowPostingOfAdvertisement(@RequestBody AdvertisementDTO advertisementDTO){

        AdvertisementDTO advertisementDTO1=this.advertisementService.allowPostingOfAdvertisement(advertisementDTO);

        return new ResponseEntity<>(advertisementDTO1,HttpStatus.OK);
    }

    @RequestMapping(value="/api/advertisement/delete-request/{id}",method = RequestMethod.GET,produces=
            MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Boolean> deleteRequest(@PathVariable Long id){
        Boolean delete = this.advertisementService.deleteRequest(id);
        return new ResponseEntity<>(delete,HttpStatus.OK);
    }

}
