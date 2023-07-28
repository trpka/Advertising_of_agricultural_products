package com.example.diplomskibackend.controller;


import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.model.Advertisement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.service.AdvertisementService;
import com.example.diplomskibackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class AdvertisementController {

    @Autowired
    private AdvertisementService advertisementService;

    @RequestMapping(value="api/advertisement/{id}",method = RequestMethod.GET,produces=
            MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<Advertisement> getById(@PathVariable Long id){
        Advertisement advertisement =this.advertisementService.findById(id);
        return new ResponseEntity<>(advertisement, HttpStatus.OK);
    }

}
