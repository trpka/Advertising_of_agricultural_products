package com.example.diplomskibackend.repository;

import com.example.diplomskibackend.model.CustomerSupport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerSupportRepository extends JpaRepository<CustomerSupport, Long> {


}