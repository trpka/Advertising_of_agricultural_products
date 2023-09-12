package com.example.diplomskibackend.dto;

import java.util.List;

public class AnnouncementPageDTO {

    List<AnnouncementDTO> content;
    boolean last;

    public AnnouncementPageDTO() {
    }

    public AnnouncementPageDTO(List<AnnouncementDTO> content, boolean last) {
        this.content = content;
        this.last = last;
    }

    public List<AnnouncementDTO> getContent() {
        return content;
    }

    public void setContent(List<AnnouncementDTO> content) {
        this.content = content;
    }

    public boolean isLast() {
        return last;
    }

    public void setLast(boolean last) {
        this.last = last;
    }


}
