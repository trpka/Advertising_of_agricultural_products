package com.example.diplomskibackend.model;


import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    @Column
    @ElementCollection(targetClass=String.class)
    private Set<String> pictures=new HashSet<>();

    @ManyToOne
    @JsonIgnore
    private RegisteredUser registeredUser;

    @ManyToOne
    @JsonIgnore
    private Company company;

    @ManyToOne
    @JsonIgnore
    private Purchase purchase;

    public Product(){

    }

    public Product(String picture, String name, String additional_description, Set<String> pictures, RegisteredUser registeredUser, Company company, Purchase purchase) {
        this.picture = picture;
        this.name = name;
        this.additional_description = additional_description;
        this.pictures = pictures;
        this.registeredUser = registeredUser;
        this.company = company;
        this.purchase = purchase;
    }

    public Product(Long id, String picture, String name, String additional_description, RegisteredUser registeredUser, Company company) {
        this.id = id;
        this.picture = picture;
        this.name = name;
        this.additional_description = additional_description;
        this.registeredUser = registeredUser;
        this.company = company;
    }

    public Product(String picture, String name, String additional_description, Set<String> pictures, RegisteredUser registeredUser, Company company) {
        this.picture = picture;
        this.name = name;
        this.additional_description = additional_description;
        this.pictures = pictures;
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

    public Set<String> getPictures() {
        return pictures;
    }

    public void setPictures(Set<String> pictures) {
        this.pictures = pictures;
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

    public Purchase getPurchase() {
        return purchase;
    }

    public void setPurchase(Purchase purchase) {
        this.purchase = purchase;
    }
}
