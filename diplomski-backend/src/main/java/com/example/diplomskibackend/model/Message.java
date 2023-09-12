package com.example.diplomskibackend.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private LocalDateTime date;
    @Column
    private String text;
    @ManyToOne
    private RegisteredUser sender;
    @ManyToOne
    private RegisteredUser recipient;

    public Message() {
    }

    public Message(LocalDateTime date, String text, RegisteredUser sender, RegisteredUser recipient) {
        this.date = date;
        this.text = text;
        this.sender = sender;
        this.recipient = recipient;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public RegisteredUser getSender() {
        return sender;
    }

    public void setSender(RegisteredUser sender) {
        this.sender = sender;
    }

    public RegisteredUser getRecipient() {
        return recipient;
    }

    public void setRecipient(RegisteredUser recipient) {
        this.recipient = recipient;
    }

}
