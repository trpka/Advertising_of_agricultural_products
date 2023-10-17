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
     Page<Announcement> findByCategoryAndEnableAndRegisteredUserIsNotNull(String category,Boolean enable,Pageable pageable);
     Page<Announcement> findByCategoryAndEnableAndCompanyIsNotNull(String category,Boolean enable, Pageable pageable);
     Page<Announcement> findByEnable(Boolean enable, Pageable pageable);
     List<Announcement> findByIdInOrderByPriceDesc(List<Long> ids);
     List<Announcement> findByIdInOrderByPriceAsc(List<Long> ids);
     List<Announcement> findByIdInOrderByDate(List<Long> ids);
     Page<Announcement> findByRegisteredUserIdAndEnable(Long id, Boolean enable, Pageable pageable);

     Page<Announcement> findByIdInOrderByPriceDesc(List<Long> ids,Pageable pageable);
     Page<Announcement> findByIdInOrderByPriceAsc(List<Long> ids,Pageable pageable);
     Page<Announcement> findByIdInOrderByDate(List<Long> ids,Pageable pageable);

}

