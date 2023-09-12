package com.example.diplomskibackend.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Admin extends User{

    @Column
    private String firstName;
    @Column
    private String lastName;

    @OneToMany(cascade = CascadeType.ALL)
    private List<CustomerSupport> customerSupports;

    public Admin() {
    }

    public Admin(String username, String password, String email, String mobile, boolean enabled, String role, List<Authority> authorities, String firstName, String lastName, List<CustomerSupport> customerSupports) {
        super(username, password, email, mobile, enabled, role, authorities);
        this.firstName = firstName;
        this.lastName = lastName;
        this.customerSupports = customerSupports;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public List<CustomerSupport> getCustomerSupports() {
        return customerSupports;
    }

    public void setCustomerSupports(List<CustomerSupport> customerSupports) {
        this.customerSupports = customerSupports;
    }
}
