package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Advertisement;
import com.example.diplomskibackend.model.Announcement;

import java.time.LocalDateTime;

public class AdvertisementDTO {

    private Long id;
    private String title;
    private String text;
    private Float price;
    private String image;
    private LocalDateTime date;
    private Long duration;
    private Boolean enable;
    private Long companyId;

    public AdvertisementDTO() {
    }

    public AdvertisementDTO(Advertisement advertisement) {
        this.id = advertisement.getId();
        this.title = advertisement.getTitle();
        this.text = advertisement.getText();
        this.price = advertisement.getPrice();
        this.image = advertisement.getImage();
        this.date = advertisement.getDate();
        this.duration = advertisement.getDuration();
        this.enable = advertisement.getEnable();
        this.companyId = advertisement.getCompany().getId();
    }

    public AdvertisementDTO(String title, String text, Float price, String image, LocalDateTime date, Long duration, Boolean enable, Long companyId) {
        this.title = title;
        this.text = text;
        this.price = price;
        this.image = image;
        this.date = date;
        this.duration = duration;
        this.enable = enable;
        this.companyId = companyId;
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

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Long getDuration() {
        return duration;
    }

    public void setDuration(Long duration) {
        this.duration = duration;
    }

    public Boolean getEnable() {
        return enable;
    }

    public void setEnable(Boolean enable) {
        this.enable = enable;
    }

    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }
}
