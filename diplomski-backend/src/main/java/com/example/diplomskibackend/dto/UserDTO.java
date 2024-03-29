package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Authority;
import com.example.diplomskibackend.model.User;

import java.util.List;

public class UserDTO {
    private Long id;
    private String username;
    private String password;
    private String email;
    private String mobile;
    private Boolean enabled;
    private String role;

    public UserDTO(Long id, String username, String password, String email, String mobile, Boolean enabled, String role) {
        super();
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.enabled = enabled;
        this.mobile = mobile;
        this.role = role;
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

    public UserDTO(User user) {
        super();

        this.username = user.getUsername();
        this.password = user.getPassword();
        this.email = user.getEmail();
        this.mobile = user.getMobile();
        this.enabled = user.isEnabled();
        this.id=user.getId();
        this.role=user.getRole();

    }
    public UserDTO() {}


}
