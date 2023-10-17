import { Component, OnInit } from '@angular/core';
import { Company } from '../model/company';
import { Address } from '../model/address';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../service/company.service';
import { AddressService } from '../service/address.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpActivateCompanyRequestComponent } from '../pop-up-activate-company-request/pop-up-activate-company-request.component';
import { PopUpDeactivateCompanyRequestComponent } from '../pop-up-deactivate-company-request/pop-up-deactivate-company-request.component';

@Component({
  selector: 'app-company-request-details',
  templateUrl: './company-request-details.component.html',
  styleUrls: ['./company-request-details.component.css']
})
export class CompanyRequestDetailsComponent implements OnInit {
  company:Company;
  id:number;
  address: Address;
  hideFields: boolean = true;
  hideFields1: boolean = false;
  constructor(
    private route: ActivatedRoute,
    public companyService:CompanyService,
    private dialogRef: MatDialog, 
    public addressService:AddressService,
    private router: Router) 
    { 
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
    this.findCompany();
  }
  findCompany(){
    this.id = this.route.snapshot.params['id'];
    this.companyService.getOneCompany(this.id)
    .subscribe(res=>{this.company=res;
    this.addressService.getOneAddress(res.addressId)
    .subscribe(result=>this.address=result)
    })
  }
  openDialog() {
    const dialogRef = this.dialogRef.open(PopUpActivateCompanyRequestComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true && !this.company.enabled){
        this.activateProfile();
      }
    });
  }

  openDialog1() {
    const dialogRef = this.dialogRef.open(PopUpDeactivateCompanyRequestComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true && !this.company.enabled){
        this.hideFields1 = true;
        this.hideFields=false;
        this.deactivateProfile();
      }
    });
  }
  activateProfile(){
    // this.showActivatedUser=true;
    // this.showFormForActivation=false;
    this.companyService.activateCompany(this.id)
      .subscribe(_=>this.findCompany())
  }
  deactivateProfile(){
    // this.showActivatedUser=true;
    // this.showFormForActivation=false;
    this.companyService.deactivateCompany(this.id)
      .subscribe(res=>{
        this.router.navigate(['company-profile-activation-requirements']);
    
      })
      
  }
}
