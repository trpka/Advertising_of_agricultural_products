package com.example.diplomskibackend.dto;

import com.example.diplomskibackend.model.Product;
import com.example.diplomskibackend.model.Purchase;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class PurchaseDTO {

    private Long id;
    private LocalDateTime date;
    private Float totalPrice;
    private List<ProductDTO> productsDTO;
    private Long registeredUserId;
    private String city;
    private String address;

    public PurchaseDTO() {
    }

    public PurchaseDTO(Long id, LocalDateTime date, Float totalPrice, List<ProductDTO> productsDTO, Long registeredUserId, String city, String address) {
        this.id = id;
        this.date = date;
        this.totalPrice = totalPrice;
        this.productsDTO = productsDTO;
        this.registeredUserId = registeredUserId;
        this.city = city;
        this.address = address;

    }

    public PurchaseDTO(Purchase purchase) {
        this.id = purchase.getId();
        this.date = purchase.getDate();
        this.totalPrice = purchase.getTotalPrice();
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product:purchase.getProducts()){
            ProductDTO productDTO = new ProductDTO(product);
            productDTOS.add(productDTO);
        }
        this.productsDTO = productDTOS;
        this.registeredUserId = purchase.getRegisteredUser().getId();
        this.city = purchase.getCity();
        this.address = purchase.getAddress();
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

    public Float getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Float totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<ProductDTO> getProductsDTO() {
        return productsDTO;
    }

    public void setProductsDTO(List<ProductDTO> productsDTO) {
        this.productsDTO = productsDTO;
    }

    public Long getRegisteredUserId() {
        return registeredUserId;
    }

    public void setRegisteredUserId(Long registeredUserId) {
        this.registeredUserId = registeredUserId;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
