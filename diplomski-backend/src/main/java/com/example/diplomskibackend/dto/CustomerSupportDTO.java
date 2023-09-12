package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Admin;
import com.example.diplomskibackend.model.CustomerSupport;
import com.example.diplomskibackend.model.RegisteredUser;

import java.time.LocalDateTime;


public class CustomerSupportDTO {

    private Long id;
    private String question;
    private String answer;
    private LocalDateTime date;
    private Long registeredUserId;
    private Long adminId;

    public CustomerSupportDTO() {
    }

    public CustomerSupportDTO(String question, String answer, LocalDateTime date, Long registeredUserId, Long adminId) {
        this.question = question;
        this.answer = answer;
        this.date = date;
        this.registeredUserId = registeredUserId;
        this.adminId = adminId;
    }

    public CustomerSupportDTO(CustomerSupport customerSupport) {
        this.question = customerSupport.getQuestion();
        this.answer = customerSupport.getAnswer();
        this.date = customerSupport.getDate();
        this.registeredUserId = customerSupport.getRegisteredUser().getId();
        if(customerSupport.getAdmin() != null){
            this.adminId = customerSupport.getAdmin().getId();
        }

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Long getRegisteredUserId() {
        return registeredUserId;
    }

    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }

    public Long getAdminId() {
        return adminId;
    }

    public void setAdminId(Long adminId) {
        this.adminId = adminId;
    }
}
