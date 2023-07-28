package com.example.diplomskibackend.model;

public enum Role{

    Admin(Values.Admin),  RegisteredUser(Values.RegisteredUser),Company(Values.Company);

    Role(String value) {
        if (!this.name().equals(value))
            throw new IllegalArgumentException("Incorrect use of Role!");
    }

    public static class Values {
        public static final String Admin = "Admin";
        public static final String RegisteredUser = "RegisteredUser";
        public static final String Company = "Company";
    }

}