package com.example.diplomskibackend.repository;

import com.example.diplomskibackend.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {


}