package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Company;


public class CompanyDTO {

    private Long id;
    private String username;
    private String password;
    private String email;
    private String mobile;
    private Boolean enabled;
    private String role;
    private String name;
    private String regNumOfCompany;
    private Long addressId;


    public CompanyDTO() {
    }

    public CompanyDTO(String username, String password, String email, String mobile, Boolean enabled, String role, String name, String regNumOfCompany, Long addressId) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.enabled = enabled;
        this.role = role;
        this.name = name;
        this.regNumOfCompany = regNumOfCompany;
        this.addressId = addressId;
    }

    public CompanyDTO(Company company){
        this.id = company.getId();
        this.username = company.getUsername();
        this.password = company.getPassword();
        this.email = company.getEmail();
        this.mobile = company.getMobile();
        this.enabled = company.isEnabled();
        this.role = company.getRole();
        this.name = company.getName();
        this.regNumOfCompany = company.getRegNumOfCompany();
        this.addressId = company.getAddress().getId();
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

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }
}
