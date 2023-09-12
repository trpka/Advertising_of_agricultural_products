package com.example.diplomskibackend.model;


import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String picture;
    @Column
    private String name;
    @Column
    private String additional_description;

    @ManyToOne
    @JsonIgnore
    private RegisteredUser registeredUser;

    @ManyToOne
    @JsonIgnore
    private Company company;

    public Product(){

    }

    public Product(Long id, String picture, String name, String additional_description, RegisteredUser registeredUser, Company company) {
        this.id = id;
        this.picture = picture;
        this.name = name;
        this.additional_description = additional_description;
        this.registeredUser = registeredUser;
        this.company = company;
    }

    public Product(String picture, String name, String additional_description, RegisteredUser registeredUser, Company company) {
        this.picture = picture;
        this.name = name;
        this.additional_description = additional_description;
        this.registeredUser = registeredUser;
        this.company = company;
    }

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

    public RegisteredUser getRegisteredUser() {
        return registeredUser;
    }

    public void setRegisteredUser(RegisteredUser registeredUser) {
        this.registeredUser = registeredUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
