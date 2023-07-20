package com.example.diplomskibackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.scheduling.annotation.EnableAsync;


@SpringBootApplication
public class DiplomskiBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(DiplomskiBackendApplication.class, args);
    }

}
