package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Product;

import java.util.HashSet;
import java.util.Set;

public class ProductDTO {

    private Long id;
    private String picture;
    private String additional_description;
    private String name;
    private Set<String> pictures=new HashSet<>();
    private Long registeredUserId;
    private Long companyId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getAdditional_description() {
        return additional_description;
    }

    public void setAdditional_description(String additional_description) {
        this.additional_description = additional_description;
    }

    public Set<String> getPictures() {
        return pictures;
    }

    public void setPictures(Set<String> pictures) {
        this.pictures = pictures;
    }

    public Long getRegisteredUserId() {
        return registeredUserId;
    }

    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public ProductDTO() {
    }

   /* public ProductDTO(Product product) {
        this.id = product.getId();
        this.picture = product.getPicture();
        this.additional_description = product.getAdditional_description();
        if(product.getRegisteredUser()!=null){
            this.registeredUserId = product.getRegisteredUser().getId();
        } else if (product.getCompany()!=null) {
            this.companyId = product.getCompany().getId();
        }

        this.name  = product.getName();
    }*/

    public ProductDTO(Product product) {
        this.id = product.getId();
        this.picture = product.getPicture();
        this.additional_description = product.getAdditional_description();
        this.pictures = product.getPictures();
        if(product.getRegisteredUser()!=null){
            this.registeredUserId = product.getRegisteredUser().getId();
        } else if (product.getCompany()!=null) {
            this.companyId = product.getCompany().getId();
        }

        this.name  = product.getName();
    }
}
