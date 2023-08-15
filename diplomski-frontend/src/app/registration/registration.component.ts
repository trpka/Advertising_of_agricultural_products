import { UserService } from '../service/user.service';
import { RegisteredUser } from './../model/registeredUser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registeredUser: RegisteredUser;
  registrated = true;

  constructor(private userService: UserService) {
    this.registeredUser = new RegisteredUser({
      id:0,
      username: "",
      password: "",
      email: "",
      mobile: "",
      enabled: false,
      role: "",
      authorities: [],
      firstName1 : "",
      lastName1: "",
      announcements : [],
      products: []
    })
   }

  ngOnInit(): void {
  }

  register(){

    this.registeredUser.role = 'RegisteredUser';
    this.userService.sendEmail(this.registeredUser)
    .subscribe();
    this.registrated = false;
  }

}
