package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.dto.FilterDTO;
import com.example.diplomskibackend.dto.ProductDTO;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.model.User;
import com.example.diplomskibackend.repository.AnnouncementRepository;
import com.example.diplomskibackend.repository.ProductRepository;
import com.example.diplomskibackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AnnouncementService {

    @Autowired
    private AnnouncementRepository announcementRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private RegisteredUserService registeredUserService;

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

    public List<AnnouncementDTO>  findRecentAnnouncements() {
        List<Announcement> announcements = this.announcementRepository.findByOrderByDateDesc();

        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            if(announcement.getEnable() == true){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);
            }
        }
        List<AnnouncementDTO> announcementDTOS1 = announcementDTOS.subList(0, 12);
        return announcementDTOS1;
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

    public List<AnnouncementDTO> findAllMechanization10(Long counter) {
        int c = Math.toIntExact(counter);
        List<Announcement> announcements = this.announcementRepository.findAll();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            if((announcement.getRegisteredUser()!=null) && (announcement.getCategory().equals("Mehanizacija"))){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);
            }

        }

        List<AnnouncementDTO> announcementDTOS1 = announcementDTOS.subList(0+c, 2+c);
        return announcementDTOS1;
    }


//STARA FUNKCIJA ZA TRAZENJE PODKATEGORIJA
//    public List<AnnouncementDTO> findMechanizationSubcategories(String array []){
//        List<Announcement> announcements = this.announcementRepository.findAll();
//        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
//        for(int i = 0;i < array.length;i++)
//        {
//            for(Announcement announcement: announcements){
//                if(announcement.getSubcategory().equals(array[i])) {
//                    AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
//                    announcementDTOS.add(announcementDTO);
//                }
//            }
//        }
//
//        return announcementDTOS;
//    }

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

    public List<AnnouncementDTO> sortAnnouncementsMechanizationByPriceDesc(){
        List<Announcement> announcements = this.announcementRepository.findByCategoryOrderByPriceDesc("Mehanizacija");
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);

        }
        return announcementDTOS;
    }

    public List<AnnouncementDTO> sortAnnouncementsMechanizationByPriceAsc( ){
        List<Announcement> announcements = this.announcementRepository.findByOrderByPriceAsc();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            if(announcement.getCategory().equals("Mehanizacija")){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);
            }

        }
        return announcementDTOS;
    }

    public List<AnnouncementDTO> sortAnnouncementsMechanizationByDate( ){
        List<Announcement> announcements = this.announcementRepository.findByOrderByDateDesc();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            if(announcement.getCategory().equals("Mehanizacija")){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);
            }

        }
        return announcementDTOS;
    }


    public List<AnnouncementDTO> applyFilter(FilterDTO filterDTO){

        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        List<AnnouncementDTO> announcementDTOS1 = new ArrayList<>();
        String sort = filterDTO.getSort();
        if(sort.equals(null) || sort.equals("")){
            announcementDTOS = this.findAllMechanization();
        } else if (sort.equals("priceDesc")) {
            announcementDTOS =this.sortAnnouncementsMechanizationByPriceDesc();
        } else if (sort.equals("priceAsc")) {
            announcementDTOS =this.sortAnnouncementsMechanizationByPriceAsc();
        }
        else{
            announcementDTOS =this.sortAnnouncementsMechanizationByDate();
        }

        if(filterDTO.getSubcategories().length == 0){
            announcementDTOS1 = announcementDTOS;
        }else{
            for(int i = 0;i < filterDTO.getSubcategories().length;i++)
            {
                for(AnnouncementDTO a :announcementDTOS){
                    if(a.getSubcategory().equals(filterDTO.getSubcategories()[i])) {
                        announcementDTOS1.add(a);
                    }
                }
            }
        }

        List<AnnouncementDTO> announcementDTOS2 = new ArrayList<>();
        if(filterDTO.getCity() == null || filterDTO.getCity() == ""){
            announcementDTOS2 = announcementDTOS1;
        }else{
            for(AnnouncementDTO a : announcementDTOS1){
                if(a.getCity().equals(filterDTO.getCity()))
                {
                    announcementDTOS2.add(a);
                }
            }
        }

        return announcementDTOS2;
    }

    public Announcement save(AnnouncementDTO announcementDTO)
    {
        RegisteredUser registeredUser = this.registeredUserService.findById(announcementDTO.getRegisteredUserId());

        Product product = new Product();
        product.setName(announcementDTO.getProductDTO().getName());
        product.setAdditional_description(announcementDTO.getProductDTO().getAdditional_description());
        product.setPicture(announcementDTO.getProductDTO().getPicture());
        //product.setId(announcementDTO.getProductDTO().getId());
        product.setRegisteredUser(registeredUser);
        this.productRepository.save(product);

        Announcement announcement = new Announcement();
        announcement.setCategory(announcementDTO.getCategory());
        announcement.setSubcategory(announcementDTO.getSubcategory());
        announcement.setPrice(announcementDTO.getPrice());
        announcement.setTitle(announcementDTO.getTitle());
        announcement.setDate(announcementDTO.getDate());
        announcement.setRegisteredUser(registeredUser);
        announcement.setMobileNumber(registeredUser.getMobile());
        announcement.setCity(announcementDTO.getCity());
        announcement.setEnable(announcementDTO.getEnable());
        announcement.setProduct(product);



        return  this.announcementRepository.save(announcement);
    }

    public Page<Announcement> findAllMechanizationPage(Pageable page) {
        String category = "Mehanizacija";
        Page<Announcement> announcements = this.announcementRepository.findByCategoryAndRegisteredUserIsNotNull(category, page);

        return announcements;
    }

    public List<AnnouncementDTO> convert(List<Announcement> announcements){
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
                AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                announcementDTOS.add(announcementDTO);
            }
            return announcementDTOS;
    }

    public List<Announcement> findAllRequest(){
        List<Announcement> announcements = this.announcementRepository.findAll();
        List<Announcement> foundedAnnouncements = new ArrayList<>();
        for(Announcement announcement:announcements){
            if(announcement.getEnable().equals(false)){
                foundedAnnouncements.add(announcement);
            }
        }
        return foundedAnnouncements;
    }

    public List<Announcement> findAllAnnouncementsOfASingleRegisteredUser(Long registeredUserId){
        List<Announcement> announcements = this.announcementRepository.findAll();
        List<Announcement> foundedAnnouncements = new ArrayList<>();

        for(Announcement announcement: announcements){
            if(announcement.getRegisteredUser() != null){
                if(announcement.getRegisteredUser().getId().equals(registeredUserId)){
                    if(announcement.getEnable() == true){
                        foundedAnnouncements.add(announcement);
                    }
                }
            }

        }
        return foundedAnnouncements;
    }
}
