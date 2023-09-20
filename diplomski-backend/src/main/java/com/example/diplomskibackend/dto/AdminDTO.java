package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Admin;

public class AdminDTO {

    private Long id;
    private String username;
    private String password;
    private String email;
    private String mobile;
    private String role;
    private String firstName1;
    private String lastName1;

    public AdminDTO() {
    }

    public AdminDTO(String username, String password, String email, String mobile, String role, String firstName1, String lastName1) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.role = role;
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
    }

    public AdminDTO(Admin admin){
        this.username = admin.getUsername();
        this.password = admin.getPassword();
        this.email = admin.getEmail();
        this.mobile = admin.getMobile();
        this.role = admin.getRole();
        this.firstName1 = admin.getFirstName();
        this.lastName1 = admin.getLastName();

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
}
