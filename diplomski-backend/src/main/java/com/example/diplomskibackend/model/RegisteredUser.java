package com.example.diplomskibackend.model;

import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class RegisteredUser extends User{
//treba paziti na getere i setere jer mesa sa klasom user i registered user
    @Column
    private String firstName1;
    @Column
    private String lastName1;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Announcement> announcements;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Product> products;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Purchase> purchases;//nije u konstruktoru

    @OneToMany(cascade = CascadeType.ALL)
    private List<CustomerSupport> customerSupports;


    public RegisteredUser(String username, String password, String email, /*String firstName, String lastName,*/
                          String mobile, boolean enabled,String role, List<Authority> authorities,
                          String firstName1, String lastName1, List<Announcement> announcements, List<Product> products  /*List<CustomerSupport> customerSupports*/) {
        super();
        setUsername(username);
        setPassword(password);
        setEmail(email);
//        setFirstName(firstName);
//        setLastName(lastName);
        setMobile(mobile);
        setEnabled(enabled);
        setRole(role);
        setAuthorities(authorities);
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        this.announcements = announcements;
        this.products = products;
        //this.customerSupports = customerSupports;
    }

    /*public RegisteredUser(Long id, String f, String l) {
        setId(id);
        this.firstName1 = f;
        this.lastName1 = l;
    }*/

    public RegisteredUser() {

    }

    public RegisteredUser(String username, String password, String email, String mobile, boolean enabled, String role, List<Authority> authorities, String firstName1, String lastName1 /*List<CustomerSupport> customerSupports*/) {
        super();
        setUsername(username);
        setPassword(password);
        setEmail(email);
//        setFirstName(firstName);
//        setLastName(lastName);
        setMobile(mobile);
        setEnabled(enabled);
        setRole(role);
        setAuthorities(authorities);
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        //this.customerSupports = customerSupports;
    }


    public String getFirstName1() {
        return firstName1;
    }

    public void setFirstName1(String firstName) {
        this.firstName1 = firstName;
    }

    public String getLastName1() {
        return lastName1;
    }

    public void setLastName1(String lastName) {
        this.lastName1 = lastName;
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

    public List<CustomerSupport> getCustomerSupports() {
        return customerSupports;
    }

    public void setCustomerSupports(List<CustomerSupport> customerSupports) {
        this.customerSupports = customerSupports;
    }

    public List<Purchase> getPurchases() {
        return purchases;
    }

    public void setPurchases(List<Purchase> purchases) {
        this.purchases = purchases;
    }
}
