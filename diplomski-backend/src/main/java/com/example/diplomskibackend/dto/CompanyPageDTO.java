package com.example.diplomskibackend.dto;

import java.util.List;

public class CompanyPageDTO {
    List<CompanyDTO> content;
    boolean last;

    public CompanyPageDTO() {
    }

    public CompanyPageDTO(List<CompanyDTO> content, boolean last) {
        this.content = content;
        this.last = last;
    }

    public List<CompanyDTO> getContent() {
        return content;
    }

    public void setContent(List<CompanyDTO> content) {
        this.content = content;
    }

    public boolean isLast() {
        return last;
    }

    public void setLast(boolean last) {
        this.last = last;
    }
}
