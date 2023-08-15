package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Announcement;
import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.RegisteredUser;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;

public class RegisteredUserDTO {

    private Long id;
    private String username;
    private String password;
    private String email;
    private String mobile;
    private String role;
    private String firstName1;
    private String lastName1;
//    private List<Announcement> announcements;
//    private List<Product> products;


    public RegisteredUserDTO() {
    }

    public RegisteredUserDTO(Long id, String username, String password, String email, String mobile, String role, String firstName1, String lastName1, List<Announcement> announcements, List<Product> products) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
//        this.announcements = announcements;
//        this.products = products;
    }

    public RegisteredUserDTO(RegisteredUser registeredUser) {

        this.id = registeredUser.getId();
        this.username = registeredUser.getUsername();
        this.password = registeredUser.getPassword();
        this.email = registeredUser.getEmail();
        this.mobile =registeredUser.getMobile();
        this.role = registeredUser.getRole();
        this.firstName1 = registeredUser.getFirstName1();
        this.lastName1 = registeredUser.getLastName1();
//        this.announcements = registeredUser.getAnnouncements();
//        this.products = registeredUser.getProducts();
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFirstName1() {
        return firstName1;
    }

    public void setFirstName1(String firstName1) {
        this.firstName1 = firstName1;
    }

    public String getLastName1() {
        return lastName1;
    }

    public void setLastName1(String lastName1) {
        this.lastName1 = lastName1;
    }

    //    public List<Announcement> getAnnouncements() {
    //        return announcements;
    //    }
    //
    //    public void setAnnouncements(List<Announcement> announcements) {
    //        this.announcements = announcements;
    //    }
    //
    //    public List<Product> getProducts() {
    //        return products;
    //    }
    //
    //    public void setProducts(List<Product> products) {
    //        this.products = products;
    //    }
}
