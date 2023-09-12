package com.example.diplomskibackend.repository;


import com.example.diplomskibackend.model.Announcement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {

     List<Announcement> findByCategoryOrderByPriceDesc(String category);
     List<Announcement> findByOrderByPriceAsc();
     List<Announcement> findByOrderByDateDesc();
     Page<Announcement> findByCategory(String category, Pageable pageable);
     Page<Announcement> findByCategoryAndRegisteredUserIsNotNull(String category,Pageable pageable);

}

