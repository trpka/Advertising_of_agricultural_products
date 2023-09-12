package com.example.diplomskibackend.dto;


import java.util.List;

public class FilterDTO {

    private String [] subcategories;
    private String sort;
    private String city;

    public FilterDTO() {
    }

    public FilterDTO(String[] subcategories, String sort, String city) {
        this.subcategories = subcategories;
        this.sort = sort;
        this.city = city;
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
}
