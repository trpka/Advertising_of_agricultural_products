package com.example.diplomskibackend.controller;


import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.service.AnnouncementService;
import com.example.diplomskibackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService productService;

    //mora da vrati DTO jer ima ako bi se vracao normalan objekat ne bi znao sta da vrati jer su ispreplitani objekti raznim vezama
    @RequestMapping(value="api/product",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<ProductDTO> save(@RequestBody Product newproduct){
        ProductDTO productDTO=this.productService.save(newproduct);
        return new ResponseEntity<>(productDTO, HttpStatus.CREATED);
    }



}
