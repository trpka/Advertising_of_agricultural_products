package com.example.diplomskibackend.service;

import com.example.diplomskibackend.model.Advertisement;
import com.example.diplomskibackend.repository.AdvertisementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdvertisementService {

    @Autowired
    private AdvertisementRepository advertisementRepository;
    //

    public Advertisement findById(Long id) {
        Optional<Advertisement> advertisementOpt=this.advertisementRepository.findById(id);
        if (!advertisementOpt.isPresent()) {
            return null;
        }
        return advertisementOpt.get();
    }

}
