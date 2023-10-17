package com.example.diplomskibackend.dto;

import java.util.List;

public class AdvertisementPageDTO {
    List<AdvertisementDTO> content;
    boolean last;

    public AdvertisementPageDTO() {
    }

    public AdvertisementPageDTO(List<AdvertisementDTO> content, boolean last) {
        this.content = content;
        this.last = last;
    }

    public List<AdvertisementDTO> getContent() {
        return content;
    }

    public void setContent(List<AdvertisementDTO> content) {
        this.content = content;
    }

    public boolean isLast() {
        return last;
    }

    public void setLast(boolean last) {
        this.last = last;
    }
}
