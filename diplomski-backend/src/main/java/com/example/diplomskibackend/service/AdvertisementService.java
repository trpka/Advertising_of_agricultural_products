package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.AdvertisementDTO;
import com.example.diplomskibackend.dto.AnnouncementDTO;
import com.example.diplomskibackend.model.*;
import com.example.diplomskibackend.repository.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AdvertisementService {

    @Autowired
    private AdvertisementRepository advertisementRepository;
    @Autowired
    private CompanyService companyService;


    public Advertisement findById(Long id) {
        Optional<Advertisement> advertisementOpt=this.advertisementRepository.findById(id);
        if (!advertisementOpt.isPresent()) {
            return null;
        }
        return advertisementOpt.get();
    }

    public List<AdvertisementDTO> findAll() {
        List<Advertisement> advertisements = this.advertisementRepository.findAll();
        List<AdvertisementDTO> advertisementDTOS = new ArrayList<>();
        for(Advertisement advertisement: advertisements){
            AdvertisementDTO advertisementDTO = new AdvertisementDTO(advertisement);
            advertisementDTOS.add(advertisementDTO);
        }
        return advertisementDTOS;
    }

    public AdvertisementDTO save(Advertisement advertisement)
    {
        Advertisement advertisement1 = this.advertisementRepository.save(advertisement);
        return new AdvertisementDTO(advertisement1);
    }

    public Advertisement save(AdvertisementDTO advertisementDTO)
    {
        Company company = this.companyService.findById(advertisementDTO.getCompanyId());

        Advertisement advertisement = new Advertisement();
        advertisement.setEndDate(advertisementDTO.getEndDate());
        advertisement.setEnable(advertisementDTO.getEnable());
        advertisement.setCompany(company);
        advertisement.setStartDate(advertisementDTO.getStartDate());
        advertisement.setPrice(advertisementDTO.getPrice());
        advertisement.setTitle(advertisementDTO.getTitle());
        advertisement.setImage(advertisementDTO.getImage());
        advertisement.setText(advertisementDTO.getText());

        return this.advertisementRepository.save(advertisement);
    }

    public List<AdvertisementDTO> findAllActive(){
        List<Advertisement> advertisements = this.advertisementRepository.findAllByEnableIsTrue();
        return this. convertToDto(advertisements);
    }
    public List<AdvertisementDTO> convertToDto(List<Advertisement> advertisements){
        List<AdvertisementDTO> advertisementDTOS = new ArrayList<>();
        for(Advertisement advertisement: advertisements){
            advertisementDTOS.add(new AdvertisementDTO(advertisement));
        }
        return advertisementDTOS;
    }

    public Page<Advertisement> findAllInactive(Pageable page) {
        Page<Advertisement> advertisements = this.advertisementRepository.findAllByEnableIsFalse(page);

        return advertisements;
    }

    public AdvertisementDTO allowPostingOfAdvertisement(AdvertisementDTO advertisementDTO) {

        Advertisement advertisement = this.findById(advertisementDTO.getId());
        advertisement.setEnable(true);

        return this.save(advertisement);
    }

    public Boolean deleteRequest(Long id) {
        Advertisement advertisement = this.findById(id);
        this.advertisementRepository.deleteById(id);
        return true;
    }

}
