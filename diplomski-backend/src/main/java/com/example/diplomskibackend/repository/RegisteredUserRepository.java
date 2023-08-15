package com.example.diplomskibackend.repository;

import com.example.diplomskibackend.model.RegisteredUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RegisteredUserRepository extends JpaRepository<RegisteredUser, Long> {

}
