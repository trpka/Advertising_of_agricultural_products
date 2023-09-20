import { Router } from '@angular/router';
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
  password1:string;
  password2:string;
  passwordsAreNotEqual:boolean=false;

  constructor(private userService: UserService,  private router: Router) {
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

    if(this.password1 !== this.password2)
    {
      this.passwordsAreNotEqual = true;
    }
    else
    {
      this.registeredUser.role = 'RegisteredUser';
      this.registeredUser.password = this.password1;
      this.userService.sendEmail(this.registeredUser)
      .subscribe();
      this.registrated = false;
    }
    
  }

  registerCompany(){
    this.router.navigate(['registration-company']);
  }

}
