package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.dto.PurchaseDTO;
import com.example.diplomskibackend.model.Company;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.Purchase;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.repository.ProductRepository;
import com.example.diplomskibackend.repository.PurchaseRepository;
import com.example.diplomskibackend.repository.RegisteredUserRepository;
import org.apache.catalina.LifecycleState;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PurchaseService {

    @Autowired
    private PurchaseRepository purchaseRepository;
    @Autowired
    private RegisteredUserService registeredUserService;
    @Autowired
    private ProductService productService;

    public Purchase save(PurchaseDTO purchaseDTO) {
        RegisteredUser registeredUser = this.registeredUserService.findById(purchaseDTO.getRegisteredUserId());
        List<Product> products = new ArrayList<>();
        for(ProductDTO productsDTO:purchaseDTO.getProductsDTO()){
            Product product = this.productService.findById(productsDTO.getId());
            products.add(product);
        }
        Purchase purchase = new Purchase();
        purchase.setDate(purchaseDTO.getDate());
        purchase.setTotalPrice(purchaseDTO.getTotalPrice());
        purchase.setRegisteredUser(registeredUser);
        purchase.setProducts(products);
        purchase.setCity(purchaseDTO.getCity());
        purchase.setAddress(purchaseDTO.getAddress());
        return this.purchaseRepository.save(purchase);
    }
}
