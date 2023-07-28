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

    public Company() {
    }

    public Company(Long id, String username, String password, String email, String mobile, boolean enabled, String role, List<Authority> authorities, String name, String regNumOfCompany, Address address) {
        super(id, username, password, email, mobile, enabled, role, authorities);
        this.name = name;
        this.regNumOfCompany = regNumOfCompany;
        this.address = address;
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
}
