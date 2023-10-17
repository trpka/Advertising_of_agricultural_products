package com.example.diplomskibackend.repository;

import com.example.diplomskibackend.model.Advertisement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdvertisementRepository extends JpaRepository<Advertisement, Long>{
    List<Advertisement> findByEnableTrue();
    List<Advertisement> findAllByEnableIsTrue();
    Page<Advertisement> findAllByEnableIsFalse(Pageable pageable);

}


