package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.repository.AnnouncementRepository;
import com.example.diplomskibackend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AnnouncementService {

    @Autowired
    private AnnouncementRepository announcementRepository;

    public Announcement findById(Long id) {
        Optional<Announcement> announcementOpt=this.announcementRepository.findById(id);
        if (!announcementOpt.isPresent()) {
            return null;
        }
        return announcementOpt.get();
    }

    public AnnouncementDTO save(Announcement announcement)
    {
        Announcement newAnnouncement = this.announcementRepository.save(announcement);
        return new AnnouncementDTO(newAnnouncement);
    }

    public List<AnnouncementDTO> findAll() {
        List<Announcement> announcements = this.announcementRepository.findAll();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
            announcementDTOS.add(announcementDTO);
        }
        return announcementDTOS;
    }


    public List<AnnouncementDTO> findAllMechanization() {
        List<Announcement> announcements = this.announcementRepository.findAll();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            if(announcement.getCategory().equals("Mehanizacija")){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);
            }

        }
        return announcementDTOS;
    }

    public List<AnnouncementDTO> findMechanizationSubcategories(String array []){
        List<Announcement> announcements = this.announcementRepository.findAll();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(int i = 0;i < array.length;i++)
        {
            for(Announcement announcement: announcements){
                if(announcement.getSubcategory().equals(array[i])) {
                    AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                    announcementDTOS.add(announcementDTO);
                }
            }
        }

        return announcementDTOS;
    }

    public List<AnnouncementDTO> sortAnnouncementsByPrice( ){
        List<Announcement> announcements = this.announcementRepository.findByOrderByPrice();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            if(announcement.getCategory().equals("Mehanizacija")){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);
            }

        }
        return announcementDTOS;
    }


}
