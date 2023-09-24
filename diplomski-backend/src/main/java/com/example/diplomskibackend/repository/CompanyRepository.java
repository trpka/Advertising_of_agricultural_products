package com.example.diplomskibackend.repository;

import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Company;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

    //Page<Announcement> findByCategoryAndRegisteredUserIsNotNull(String category, Pageable pageable);
    Page<Company> findByEnabledFalse(Pageable pageable);
}
