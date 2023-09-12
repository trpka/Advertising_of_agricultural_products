package com.example.diplomskibackend.model;


import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class CustomerSupport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String question;
    @Column
    private String answer;
    @Column
    private LocalDateTime date;
    @ManyToOne
    private RegisteredUser registeredUser;
    @ManyToOne
    private Admin admin;

    public CustomerSupport() {
    }

    public CustomerSupport(Long id, String question, String answer,LocalDateTime date, RegisteredUser registeredUser, Admin admin) {
        this.id = id;
        this.question = question;
        this.answer = answer;
        this.date = date;
        this.registeredUser = registeredUser;
        this.admin = admin;
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

    public RegisteredUser getRegisteredUser() {
        return registeredUser;
    }

    public void setRegisteredUser(RegisteredUser registeredUser) {
        this.registeredUser = registeredUser;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
