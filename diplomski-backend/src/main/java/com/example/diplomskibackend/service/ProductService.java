package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductDTO save(Product product)
    {
        Product newProduct=this.productRepository.save(product);
        return new ProductDTO(newProduct);
    }

}
