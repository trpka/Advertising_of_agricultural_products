package com.example.diplomskibackend.dto;


import java.util.List;

public class FilterDTO {

    private String [] subcategories;
    private String sort;

    public FilterDTO() {
    }

    public FilterDTO(String[] subcategories, String sort) {
        this.subcategories = subcategories;
        this.sort = sort;
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
}
