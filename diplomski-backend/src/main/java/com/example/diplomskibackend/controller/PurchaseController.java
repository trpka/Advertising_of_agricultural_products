package com.example.diplomskibackend.controller;

import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.dto.PurchaseDTO;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.Purchase;
import com.example.diplomskibackend.repository.PurchaseRepository;
import com.example.diplomskibackend.service.EmailService;
import com.example.diplomskibackend.service.PDFGeneratorService;
import com.example.diplomskibackend.service.ProductService;
import com.example.diplomskibackend.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
public class PurchaseController {

    @Autowired
    private PurchaseService purchaseService;
    @Autowired
    private PDFGeneratorService pdfGeneratorService;
    @Autowired
    private PurchaseRepository purchaseRepository;
    @Autowired
    private EmailService emailService;

    private Logger logger = LoggerFactory.getLogger(UserController.class);

    @RequestMapping(value="api/purchase",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<PurchaseDTO> save(@RequestBody PurchaseDTO purchaseDTO){
        Purchase purchase =this.purchaseService.save(purchaseDTO);
        return new ResponseEntity<>(new PurchaseDTO(purchase), HttpStatus.CREATED);
    }

    @GetMapping("api/purchase/pdf")
    //@PreAuthorize("hasRole('CLIENT')")
    public void generatePDF() throws IOException {
        List<Purchase> all=this.purchaseRepository.findByOrderByIdDesc();
        Purchase last=all.get(0);
        String file_name=this.pdfGeneratorService.export(last);
        try {
            System.out.println("Thread id: " + Thread.currentThread().getId());
            this.emailService.triggerMailForPurchase(last.getRegisteredUser(),file_name);

        } catch (Exception e) {
            logger.info("Greska prilikom slanja emaila: " + e.getMessage());
            Thread.currentThread().interrupt();
        }
    }
}
