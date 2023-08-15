package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public ProductDTO save(Product product)
    {
        Product newProduct=this.productRepository.save(product);
        return new ProductDTO(newProduct);
    }

    public Product save1(ProductDTO productDTO)
    {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setAdditional_description(productDTO.getAdditional_description());
        return  this.productRepository.save(product);
    }

    public Product findById(Long id) {
        Optional<Product> productOpt=this.productRepository.findById(id);
        if (!productOpt.isPresent()) {
            return null;
        }
        return productOpt.get();
    }

}
