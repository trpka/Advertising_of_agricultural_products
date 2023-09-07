package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Company;

import java.time.LocalDateTime;

public class AnnouncementDTO {

    private Long id;

    private LocalDateTime date;

    private String title;

    private String category;

    private String subcategory;

    private Float price;

    private Integer quantity;

    private String city;

    private String mobileNumber;

    private Long registeredUserId;

    private ProductDTO productDTO;
    private Long companyId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Long getRegisteredUserId() {
        return registeredUserId;
    }

    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }

    public ProductDTO getProductDTO() {
        return productDTO;
    }

    public void setProductDTO(ProductDTO productDTO) {
        this.productDTO = productDTO;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public AnnouncementDTO() {
    }

    public AnnouncementDTO(Announcement announcement) {
        this.id = announcement.getId();
        this.date = announcement.getDate();
        this.title = announcement.getTitle();
        this.category = announcement.getCategory();
        this.subcategory = announcement.getSubcategory();
        this.price = announcement.getPrice();
        this.quantity = announcement.getQuantity();
        this.city = announcement.getCity();
        this.mobileNumber = announcement.getMobileNumber();
        if(announcement.getRegisteredUser()!=null)
        {
            this.registeredUserId = announcement.getRegisteredUser().getId();

        }else if (announcement.getCompany()!=null) {
            this.companyId = announcement.getCompany().getId();
        }
        this.productDTO=new ProductDTO(announcement.getProduct());



    }
}
