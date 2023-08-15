package com.example.diplomskibackend.service;

import com.example.diplomskibackend.dto.RegisteredUserDTO;
import com.example.diplomskibackend.exception.ResourceConflictException;
import com.example.diplomskibackend.model.RegisteredUser;
import com.example.diplomskibackend.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;


@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private Environment env;
    @Autowired
    private UserService userService;

    @Async
    public void sendNotificaitionAsync(RegisteredUserDTO regUserRequest) throws MailException, InterruptedException {
        System.out.println("Async metoda se izvrsava u drugom Threadu u odnosu na prihvaceni zahtev. Thread id: " + Thread.currentThread().getId());
        //Simulacija duze aktivnosti da bi se uocila razlika
        Thread.sleep(10000);
        System.out.println("Slanje emaila...");
        //deo iz Authetication controller
        User existUser = this.userService.findByUsername(regUserRequest.getUsername());

        if (existUser != null) {
            throw new ResourceConflictException(regUserRequest.getId(), "Username already exists");
        }

        User user = this.userService.save(regUserRequest);

        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(user.getEmail());
        mail.setFrom(env.getProperty("spring.mail.username"));
        mail.setSubject("Potvrdi svoju registarciju");
        mail.setText("Pozdrav " + user.getUsername() +",\n Klikni te na naredni kod kako biste aktivirali svoj nalog"+"\n http://localhost:4200/confirm-registration/"+user.getId()+ "\n\nhvala što želiš da postaneš naš član");
        javaMailSender.send(mail);

        System.out.println("Email poslat!");
    }
}
