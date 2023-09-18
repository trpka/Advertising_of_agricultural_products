package com.example.diplomskibackend.controller;


import com.example.diplomskibackend.dto.*;
import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.service.AnnouncementService;
import com.example.diplomskibackend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;
    @Autowired
    private ProductService productService;

    @RequestMapping(value="api/announcement/{id}",method = RequestMethod.GET,produces=
            MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('OWNER')")
    public ResponseEntity<AnnouncementDTO> getById(@PathVariable Long id){
        Announcement announcement=this.announcementService.findById(id);
        AnnouncementDTO announcementDTO=new AnnouncementDTO(announcement);
        return new ResponseEntity<>(announcementDTO,HttpStatus.OK);
    }
    @RequestMapping(value="api/announcement",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<AnnouncementDTO> save(@RequestBody Announcement announcement){
        AnnouncementDTO announcementDTO=this.announcementService.save(announcement);
        return new ResponseEntity<>(announcementDTO, HttpStatus.CREATED);
    }

    @RequestMapping(value="api/announcements",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AnnouncementDTO>> findAll()
    {
        List<AnnouncementDTO> terms= this.announcementService.findAll();
        return new ResponseEntity<>(terms, HttpStatus.OK);
    }

    @RequestMapping(value="api/announcements-recent",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AnnouncementDTO>> findRecentAnnouncements()
    {
        List<AnnouncementDTO> terms= this.announcementService.findRecentAnnouncements();
        return new ResponseEntity<>(terms, HttpStatus.OK);
    }

    @RequestMapping(value="api/announcements-requests",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AnnouncementDTO>> findAllRequest()
    {
        List<Announcement> announcements= this.announcementService.findAllRequest();
        List<AnnouncementDTO> announcements1 = this.announcementService.convert(announcements);
        return new ResponseEntity<>(announcements1, HttpStatus.OK);
    }

    //Metoda koja vraca sve oglase vezane za mehanizaciju
    @RequestMapping(value="api/announcements/mechanization",method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<List<AnnouncementDTO>> findAllMechanization()
    {
        List<AnnouncementDTO> announcementDTOS= this.announcementService.findAllMechanization();
        return new ResponseEntity<>(announcementDTOS, HttpStatus.OK);
    }
    //Metoda koja vraca sve oglase vezane za mehanizaciju ali 10 po 10
    @RequestMapping(value="api/announcements/mechanization10", method = RequestMethod.GET,
            params = "counter",
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<AnnouncementDTO>> findAllMechanization10(@RequestParam Long counter){
        List<AnnouncementDTO> announcementDTOS= this.announcementService.findAllMechanization10(counter);
        return new ResponseEntity<>(announcementDTOS,HttpStatus.OK);
    }


    @RequestMapping(value="api/announcements/mechanization/subcategories",method = RequestMethod.PUT,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<List<AnnouncementDTO>>  findMechanizationSubcategories(@RequestBody String array []){
        List<AnnouncementDTO> announcementDTOS= this.announcementService.findMechanizationSubcategories(array);
        return new ResponseEntity<>(announcementDTOS, HttpStatus.OK);
    }

    @RequestMapping(value="api/announcements/mechanization/filter",method = RequestMethod.PUT,
            consumes=MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<List<AnnouncementDTO>>  applyFilter(@RequestBody FilterDTO filterDTO){
        List<AnnouncementDTO> announcementDTOS= this.announcementService.applyFilter(filterDTO);
        return new ResponseEntity<>(announcementDTOS, HttpStatus.OK);
    }

    @RequestMapping(value="api/announcements/mechanization/sort-by-price", method = RequestMethod.GET,
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<List<AnnouncementDTO>> sortAnnouncementsMechanizationByPrice(){
        List<AnnouncementDTO> announcementDTOS=this.announcementService.sortAnnouncementsMechanizationByPriceDesc();
        return new ResponseEntity<>(announcementDTOS,HttpStatus.OK);
    }

    @RequestMapping(value="api/announcement-product",method = RequestMethod.POST,
            consumes= MediaType.APPLICATION_JSON_VALUE)
    //@PreAuthorize("hasRole('REGISTERED_USER')")
    public ResponseEntity<AnnouncementDTO> save(@RequestBody AnnouncementDTO announcementDTO){
        Announcement announcement=this.announcementService.save(announcementDTO);
        AnnouncementDTO announcementDTO1=new AnnouncementDTO(announcement);
        return new ResponseEntity<>(announcementDTO1, HttpStatus.CREATED);
    }

    @RequestMapping(value="api/announcements/mech", params= {"page","size"},method = RequestMethod.GET,produces = {
            MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public ResponseEntity<AnnouncementPageDTO> findAll(Pageable pageable){
        Page<Announcement> mechanizationAnnouncements = this.announcementService.findAllMechanizationPage(pageable);
        //Page<Item> items=itemService.findAll(pageable);
        AnnouncementPageDTO announcementPageDTO =new AnnouncementPageDTO(this.announcementService.convert(mechanizationAnnouncements.getContent()), mechanizationAnnouncements.isLast());
        return new ResponseEntity<>(announcementPageDTO,HttpStatus.OK);
    }

    @RequestMapping(value="api/announcements/registered-user", method = RequestMethod.GET,
            params = "registeredUserId",
            produces= {MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE})
    public ResponseEntity<List<AnnouncementDTO>>  findAllAnnouncementsOfASingleRegisteredUser(@RequestParam Long registeredUserId){
        List<Announcement> announcements= this.announcementService.findAllAnnouncementsOfASingleRegisteredUser(registeredUserId);
        List<AnnouncementDTO> announcementDTOS = this.announcementService.convert(announcements);
        return new ResponseEntity<>(announcementDTOS,HttpStatus.OK);
    }


}
