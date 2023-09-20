package com.example.diplomskibackend.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Company extends User{

    @Column
    private String name;
    @Column
    private String regNumOfCompany;
    @ManyToOne
    private Address address;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Advertisement> advertisements;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Announcement> announcements;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Product> products;

    public Company() {
    }

    public Company(String username, String password, String email, String mobile, boolean enabled, String role, List<Authority> authorities, String name, String regNumOfCompany, Address address/*, List<Advertisement> advertisements, List<Announcement> announcements, List<Product> products*/) {
        super(username, password, email, mobile, enabled, role, authorities);
        this.name = name;
        this.regNumOfCompany = regNumOfCompany;
        this.address = address;
        //this.advertisements = advertisements;
        //this.announcements = announcements;
        //this.products = products;
    }

    public Company(String username, String password, String email, String mobile, boolean enabled, String role, List<Authority> authorities, String name, String regNumOfCompany, Address address, List<Advertisement> advertisements, List<Announcement> announcements, List<Product> products) {
        super(username, password, email, mobile, enabled, role, authorities);
        this.name = name;
        this.regNumOfCompany = regNumOfCompany;
        this.address = address;
        this.advertisements = advertisements;
        this.announcements = announcements;
        this.products = products;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegNumOfCompany() {
        return regNumOfCompany;
    }

    public void setRegNumOfCompany(String regNumOfCompany) {
        this.regNumOfCompany = regNumOfCompany;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<Advertisement> getAdvertisements() {
        return advertisements;
    }

    public void setAdvertisements(List<Advertisement> advertisements) {
        this.advertisements = advertisements;
    }

    public List<Announcement> getAnnouncements() {
        return announcements;
    }

    public void setAnnouncements(List<Announcement> announcements) {
        this.announcements = announcements;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }
}
