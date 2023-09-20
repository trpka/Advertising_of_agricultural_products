import { Router } from '@angular/router';
import { RegisteredUser } from '../model/registeredUser';
import { RegisteredUserService } from './../service/registered-user.service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { Admin } from '../model/admin';
import { CompanyService } from '../service/company.service';
import { Company } from '../model/company';
import { Address } from '../model/address';
import { AddressService } from '../service/address.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpProfileChangeSuccessfulComponent } from '../pop-up-profile-change-successful/pop-up-profile-change-successful.component';
import { PopUpPasswordChangeSuccessfulComponent } from '../pop-up-password-change-successful/pop-up-password-change-successful.component';

@Component({
  selector: 'app-profile-registered-user',
  templateUrl: './profile-registered-user.component.html',
  styleUrls: ['./profile-registered-user.component.css']
})
export class ProfileRegisteredUserComponent implements OnInit {

  id:number;
  registeredUser: RegisteredUser;
  admin: Admin;
  company:Company;
  address:Address;
  //enableEditPage:boolean= false;
  password1: string;
  password2: string;
  passwordsAreNotEqual:boolean;
  error:string = "Lozinke nisu jednake, pokušajte ponovo";
  role:string;

  firstName:string;
  lastName:string;
  mobile:string;
  username:string;
  email:string;
  hideButton:boolean= true;
  
  constructor(public registeredUserService:RegisteredUserService, private router: Router, public adminService:AdminService, public companyService:CompanyService,
    public addressService:AddressService,private dialogRef: MatDialog) {

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
      this.company = new Company({
        id:0,
        username: "",
        password: "",
        email: "",
        mobile:"",
        enabled:false,
        role:"",
        authorities: [] ,
        name: "",
        regNumOfCompany: "",
        addressId:0,
        announcements: [],
        products:[]
      });
      this.passwordsAreNotEqual =false;
  }

  ngOnInit(): void {
    this.findRegisteredUser()
    this. backToProfileInfo()
  }

  findRegisteredUser(){

    this.id = Number(sessionStorage.getItem('id'));
    this.role = String(sessionStorage.getItem('role'));
   
    if(this.role == "RegisteredUser")
    {
      this.registeredUserService.setEnableProfilePage(true)
      this.registeredUserService.getOneRegUser(this.id)
      .subscribe(res=>{this.registeredUser=res;
        this.firstName = res.firstName1
        this.lastName = res.lastName1
        this.username = res.username
        this.mobile = res.mobile
        this.email = res.email
      })
    }
    else if(this.role == "Company"){
      this.router.navigate(['profile-company']);
      // this.registeredUserService.setEnableProfilePage(false)
      // this.companyService.setEnableProfilePageCompany(true)
      // this.companyService.getOneCompany(this.id)
      // .subscribe(res=>this.company=res)
    }
    else if(this.role == "Admin"){
      this.hideButton = false;
      this.adminService.getOneAdmin(this.id)
      .subscribe(res=>{this.admin=res;
        this.firstName = res.firstName1
        this.lastName = res.lastName1
        this.username = res.username
        this.mobile = res.mobile
        this.email = res.email
      })
    }
   
  }

  go_to_edit_profile(){
    this.registeredUserService.setEnableProfilePage(false);
    this.registeredUserService.setEnableEditPage(true);
    //this.enableEditPage = true;
  }

  go_to_change_password(){
    this.registeredUserService.setEnableProfilePage(false);
    this.registeredUserService.setEnableEditPassword(true);
  }

  backToProfileInfo(){
    this.registeredUserService.setEnableProfilePage(true);
    this.registeredUserService.setEnableEditPage(false);
    //this.enableEditPage = false;
  }

  backToProfileInfo1(){
    this.registeredUserService.setEnableProfilePage(true);
    this.registeredUserService.setEnableEditPassword(false);
  }

  editProfile(){
    this.registeredUserService.updateRegisteredUser(this.registeredUser)
    .subscribe(res=>this.registeredUser=res)

    this.dialogRef.open(PopUpProfileChangeSuccessfulComponent)
  }

  changePassword(){
    if(this.password1 == this.password2)
     {
      this.passwordsAreNotEqual = false;
      this.registeredUser.password = this.password1;
      this.registeredUserService.updateRegisteredUser(this.registeredUser)
      .subscribe(res=>{this.registeredUser=res;
        this.password1 = "";
        this.password2 = "";
      
      })
      this.dialogRef.open(PopUpPasswordChangeSuccessfulComponent);
     }
     else{
      this.passwordsAreNotEqual = true;
      this.password1 = "";
      this.password2 = "";
     }
    }
}
