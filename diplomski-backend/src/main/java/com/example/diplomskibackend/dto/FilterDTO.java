package com.example.diplomskibackend.dto;


import java.util.List;

public class FilterDTO {

    private String [] subcategories;
    private String sort;
    private String city;
    private String typeOfUser;
    private String typeOfAnnouncements;

    public FilterDTO() {
    }

    public FilterDTO(String[] subcategories, String sort, String city,String typeOfUser,String typeOfAnnouncements) {
        this.subcategories = subcategories;
        this.sort = sort;
        this.city = city;
        this.typeOfUser = typeOfUser;
        this.typeOfAnnouncements = typeOfAnnouncements;
    }

    public String[] getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(String[] subcategories) {
        this.subcategories = subcategories;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getTypeOfUser() {
        return typeOfUser;
    }

    public void setTypeOfUser(String typeOfUser) {
        this.typeOfUser = typeOfUser;
    }

    public String getTypeOfAnnouncements() {
        return typeOfAnnouncements;
    }

    public void setTypeOfAnnouncements(String typeOfAnnouncements) {
        this.typeOfAnnouncements = typeOfAnnouncements;
    }

}
