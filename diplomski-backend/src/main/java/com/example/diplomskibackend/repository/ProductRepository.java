package com.example.diplomskibackend.repository;

import com.example.diplomskibackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByRegisteredUserId(Long id);

}
