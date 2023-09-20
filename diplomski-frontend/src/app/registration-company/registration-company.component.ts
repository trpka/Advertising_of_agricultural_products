import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { Address } from '../model/address';
import { CompanyService } from '../service/company.service';
import { CompanyAddress } from '../model/companyAddressDTO';
import { User } from '../model/user';
import { CompanyDTO } from '../model/companyDTO';

@Component({
  selector: 'app-registration-company',
  templateUrl: './registration-company.component.html',
  styleUrls: ['./registration-company.component.css']
})
export class RegistrationCompanyComponent implements OnInit {

  companyDTO:CompanyDTO;
  address:Address;
  companyAddress: CompanyAddress;
  user:User;
  registrated :boolean = true;
  password1:string;
  password2:string;
  passwordsAreNotEqual:boolean=false;

  constructor(private companyService:CompanyService) {
    this.companyDTO = new CompanyDTO({
      id:0,
      username: "",
      password: "",
      email: "",
      mobile:"",
      enabled:false,
      role:"",
      name: "",
      regNumOfCompany: "",
      addressId:0
    }),
    this.address = new Address({
      id:0,
      country: "",
      city: "",
      street: "",
      zipCode:""
    }),
    this.companyAddress = new CompanyAddress({
      companyDTO: new CompanyDTO({
        id:0,
        username: "",
        password: "",
        email: "",
        mobile:"",
        enabled:false,
        role:"",
        name: "",
        regNumOfCompany: "",
        addressId:0
      }),
      address : new Address({
        id:0,
        country: "",
        city: "",
        street: "",
        zipCode:""
      })
      });
   }

  ngOnInit(): void {
   
  }

  register(){
    this.companyDTO.role = 'Company';
    this.companyDTO.password = this.password1;
    this.companyAddress.companyDTO = this.companyDTO;
    this.companyAddress.address = this.address;
    console.log(this.companyAddress)
    this.companyService.saveCompany(this.companyAddress)
    .subscribe(res => this.user = res);
    this.registrated = false;
    
  }

}
