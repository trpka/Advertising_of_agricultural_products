import { Router } from '@angular/router';
import { RegisteredUser } from '../model/registeredUser';
import { RegisteredUserService } from './../service/registered-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-registered-user',
  templateUrl: './profile-registered-user.component.html',
  styleUrls: ['./profile-registered-user.component.css']
})
export class ProfileRegisteredUserComponent implements OnInit {

  id:number;
  registeredUser: RegisteredUser;
  constructor(private registeredUserService:RegisteredUserService, private router: Router) {

    this.registeredUser=new RegisteredUser(
      {
        id : 0,
        username : "",
        password : "",
        email : "",
        mobile : "",
        enabled : true,
        role : "",
        authorities:[] ,
        firstName1: "",
        lastName1:"",
        announcements:[],
        products:[]
      });
  }

  ngOnInit(): void {
    this.findRegisteredUser()
  }

  findRegisteredUser(){

    this.id = Number(sessionStorage.getItem('id'));
    this.registeredUserService.getOneRegUser(this.id)
    .subscribe(res=>this.registeredUser=res)
  }


}
