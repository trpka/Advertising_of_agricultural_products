package com.example.diplomskibackend.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Advertisement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private String title;
    @Column
    private String text;
    @Column
    private Float price;
    @Column
    private String image;
    @Column
    private LocalDateTime date;
    @ManyToOne
    private Company company;

    public Advertisement() {
    }

    public Advertisement(Long id, String title, String text, Float price, String image, LocalDateTime date, Company company) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.price = price;
        this.image = image;
        this.date = date;
        this.company = company;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
