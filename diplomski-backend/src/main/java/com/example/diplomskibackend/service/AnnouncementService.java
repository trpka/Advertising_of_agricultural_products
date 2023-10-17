package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.*;
import com.example.diplomskibackend.model.*;
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
    @Autowired
    private CompanyService companyService;

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


    public List<AnnouncementDTO> findAllMechanization(String typeOfUser, String typeOfAnnouncements) {
        List<Announcement> announcements = this.announcementRepository.findAll();
        List<AnnouncementDTO> announcementDTOS = new ArrayList<>();
        for(Announcement announcement: announcements){
            if(announcement.getCategory().equals(typeOfAnnouncements)){
                if(announcement.getEnable().equals(true)){
                    if(announcement.getRegisteredUser()!=null){
                        if(announcement.getRegisteredUser().getRole().equals(typeOfUser))
                        {
                            AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                            announcementDTOS.add(announcementDTO);
                        }
                    }
                    else if(announcement.getCompany()!=null)
                    {
                        if(announcement.getCompany().getRole().equals(typeOfUser))
                        {
                            AnnouncementDTO announcementDTO = new AnnouncementDTO(announcement);
                            announcementDTOS.add(announcementDTO);
                        }

                    }
                }
            }

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

        List<AnnouncementDTO> announcementDTOS = this.findAllMechanization(filterDTO.getTypeOfUser(),filterDTO.getTypeOfAnnouncements());
        List<AnnouncementDTO> announcementDTOS1 = new ArrayList<>();
        List<Long> ids3 = new ArrayList<>();

        List<Long> ids1 = new ArrayList<>();
        if(filterDTO.getSubcategories().length == 0){
            announcementDTOS1 = announcementDTOS;
        }else{
            for(int i = 0;i < filterDTO.getSubcategories().length;i++)
            {
                for(AnnouncementDTO a :announcementDTOS){
                    if(a.getSubcategory().equals(filterDTO.getSubcategories()[i])) {
                        announcementDTOS1.add(a);
                        ids1.add(a.getId());
                    }
                }
            }
        }

        List<AnnouncementDTO> announcementDTOS2 = new ArrayList<>();
        List<Long> ids2 = new ArrayList<>();
        if(filterDTO.getCity() == null || filterDTO.getCity() == ""){
            announcementDTOS2 = announcementDTOS1;
        }else{
            for(AnnouncementDTO a : announcementDTOS1){
                if(a.getCity().equals(filterDTO.getCity()))
                {
                    announcementDTOS2.add(a);
                    ids2.add(a.getId());
                }
            }
        }

        for(AnnouncementDTO a :announcementDTOS2){
            ids3.add(a.getId());
        }

        List<Long> ids = new ArrayList<>();
        if(ids1.isEmpty() && ids2.isEmpty()){
            ids = ids3;
        }
        else if(ids1.isEmpty() && !ids2.isEmpty()){
            ids=ids2;
        }
        else if(!ids1.isEmpty() && !ids2.isEmpty())
        {
            ids = ids2;
        }
        else if(!ids1.isEmpty() && ids2.isEmpty()){
            ids = ids1;
        }

        List<AnnouncementDTO> announcementDTOS3 = new ArrayList<>();
        String sort = filterDTO.getSort();
        if(sort.equals(null) || sort.equals("")){
            announcementDTOS3 =  announcementDTOS2;
        } else if (sort.equals("priceDesc")) {
            announcementDTOS3 =this.convert(this.announcementRepository.findByIdInOrderByPriceDesc(ids));
        } else if (sort.equals("priceAsc")) {
            announcementDTOS3 = this.convert(this.announcementRepository.findByIdInOrderByPriceAsc(ids));
        }
        else if(sort.equals("date")){
            announcementDTOS3 =this.convert(this.announcementRepository.findByIdInOrderByDate(ids));
        }


        return announcementDTOS3;
    }

    public Announcement save(AnnouncementDTO announcementDTO)
    {
        RegisteredUser registeredUser = this.registeredUserService.findById(announcementDTO.getRegisteredUserId());
        Company company = this.companyService.findById(announcementDTO.getCompanyId());

        Product product = new Product();
        product.setName(announcementDTO.getProductDTO().getName());
        product.setAdditional_description(announcementDTO.getProductDTO().getAdditional_description());
        product.setPicture(announcementDTO.getProductDTO().getPicture());
        product.setPictures(announcementDTO.getProductDTO().getPictures());
        //product.setId(announcementDTO.getProductDTO().getId());
        if(registeredUser != null){
            product.setRegisteredUser(registeredUser);
        }
        else{
            product.setCompany(company);
        }

        this.productRepository.save(product);

        Announcement announcement = new Announcement();
        announcement.setCategory(announcementDTO.getCategory());
        announcement.setSubcategory(announcementDTO.getSubcategory());
        announcement.setPrice(announcementDTO.getPrice());
        announcement.setTitle(announcementDTO.getTitle());
        announcement.setDate(announcementDTO.getDate());
        if(registeredUser != null){
            announcement.setRegisteredUser(registeredUser);
            announcement.setMobileNumber(registeredUser.getMobile());
        }
        else
        {
            announcement.setCompany(company);
        }


        announcement.setCity(announcementDTO.getCity());
        announcement.setEnable(announcementDTO.getEnable());
        announcement.setProduct(product);



        return  this.announcementRepository.save(announcement);
    }

    public Page<Announcement> findAllMechanizationRegUserPage(Pageable page, String typeOfAnnouncements) {
        Page<Announcement> announcements = this.announcementRepository.findByCategoryAndEnableAndRegisteredUserIsNotNull(typeOfAnnouncements,true, page);

        return announcements;
    }

    public Page<Announcement> findAllMechanizationCompanyPage(Pageable page, String typeOfAnnouncements) {
        Page<Announcement> announcements = this.announcementRepository.findByCategoryAndEnableAndCompanyIsNotNull(typeOfAnnouncements,true, page);

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

    public Page<Announcement> findAllAnnouncementsOfASingleRegisteredUserPage(Pageable page, Long id) {
        Page<Announcement> announcements = this.announcementRepository.findByRegisteredUserIdAndEnable(id,true, page);
        return announcements;
    }

    public AnnouncementDTO allowPostingOfAnnouncement(AnnouncementDTO announcementDTO) {

        Announcement announcement = this.findById(announcementDTO.getId());
        announcement.setEnable(true);

        return this.save(announcement);
    }


//    public List<Announcement> findAllRequest(){
//        List<Announcement> announcements = this.announcementRepository.findAll();
//        List<Announcement> foundedAnnouncements = new ArrayList<>();
//        for(Announcement announcement:announcements){
//            if(announcement.getEnable().equals(false)){
//                foundedAnnouncements.add(announcement);
//            }
//        }
//        return foundedAnnouncements;
//    }

    public Page<Announcement> findAllRequest(Pageable page) {
        Page<Announcement> announcements = this.announcementRepository.findByEnable(false, page);
        return announcements;
    }

    public Boolean deleteRequest(Long id) {
        Announcement announcement = this.findById(id);
//        Company company = this.findById(id);
//        CompanyDTO companyDTO=new CompanyDTO(company);
//        try {
//            System.out.println("Thread id: " + Thread.currentThread().getId());
//            this.emailService.sendNotificaitionForCompanyActivationAsync(companyDTO);
//        }catch( Exception e ){
//            logger.info("Greska prilikom slanja emaila: " + e.getMessage());
//            Thread.currentThread().interrupt();
//        }
        this.announcementRepository.deleteById(id);
        return true;
    }
}
