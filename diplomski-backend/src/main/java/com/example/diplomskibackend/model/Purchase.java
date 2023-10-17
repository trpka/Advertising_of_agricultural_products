package com.example.diplomskibackend.model;

import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column
    private LocalDateTime date;
    @Column
    private Float totalPrice;
    @Column
    private String city;
    @Column
    private String address;
    @OneToMany(cascade = CascadeType.ALL)
    private List<Product> products;
    @ManyToOne
    @JsonIgnore
    private RegisteredUser registeredUser;

    public Purchase() {
    }

    public Purchase(LocalDateTime date, Float totalPrice, List<Product> products, RegisteredUser registeredUser, String city,String address) {
        this.date = date;
        this.totalPrice = totalPrice;
        this.products = products;
        this.registeredUser = registeredUser;
        this.city = city;
        this.address = address;
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

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public RegisteredUser getRegisteredUser() {
        return registeredUser;
    }

    public void setRegisteredUser(RegisteredUser registeredUser) {
        this.registeredUser = registeredUser;
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
