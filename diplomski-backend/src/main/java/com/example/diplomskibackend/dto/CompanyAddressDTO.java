package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Address;

public class CompanyAddressDTO {

    private CompanyDTO companyDTO;
    private Address address;

    public CompanyAddressDTO() {
    }

    public CompanyDTO getCompanyDTO() {
        return companyDTO;
    }

    public void setCompanyDTO(CompanyDTO companyDTO) {
        this.companyDTO = companyDTO;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }
}
