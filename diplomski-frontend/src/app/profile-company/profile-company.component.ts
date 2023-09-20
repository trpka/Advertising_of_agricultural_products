import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';
import { Address } from '../model/address';
import { AddressService } from '../service/address.service';

@Component({
  selector: 'app-profile-company',
  templateUrl: './profile-company.component.html',
  styleUrls: ['./profile-company.component.css']
})
export class ProfileCompanyComponent implements OnInit {

  company:Company;
  id:number;
  address: Address;
  constructor(public companyService:CompanyService, public addressService:AddressService) {
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
    this.address = new Address({
      id:0,
      country: "",
      city: "",
      street: "",
      zipCode:""
    });
   }

  ngOnInit(): void {
    this.findCompany()
  }

  findCompany(){
    this.id = Number(sessionStorage.getItem('id'));
    this.companyService.getOneCompany(this.id)
    .subscribe(res=>{this.company=res;
    this.addressService.getOneAddress(res.addressId)
    .subscribe(result=>this.address=result)
    })
  }

  go_to_edit_profile(){

  }
 
  go_to_change_password(){
    
  }

}
