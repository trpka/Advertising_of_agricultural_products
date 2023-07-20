package com.example.diplomskibackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.diplomskibackend.model.Authority;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long>{
    List<Authority> findByName(String name);
}
