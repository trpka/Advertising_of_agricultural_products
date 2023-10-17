import { Advertisement } from '../model/advertisement';
import { Company } from '../model/company';
import { CompanyService } from '../service/company.service';
import { AdvertisementService } from './../service/advertisement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  advertisement:Advertisement;
  company:Company;
  advertisements: Advertisement[];
  length:number;
  randNum:number;

  constructor(private advertisementService:AdvertisementService, private companyService:CompanyService) {
    this.advertisement=new Advertisement(
      {
        id : 0,
        title : "",
        text : "",
        price : 0,
        image : "",
        startDate: new Date(),
        endDate:new Date(),
        enable: false,
        companyId: 0
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
  }

  // ngOnInit(): void {
  //   this.advertisementService.getAll()
  //   .subscribe(res => {this.advertisements = res;
    
  //   this.length = this.advertisements.length;
  //   this.randNum = this.randomIntFromInterval(1,this.length);

  //   this.advertisementService.getOne( this.randNum)
  //   .subscribe(result =>{ this.advertisement = result;
  //     this.companyService.getOneCompany(this.advertisement.companyId)
  //     .subscribe(result=>this.company = result)
  //   console.log(this.advertisement.companyId)
  //   })

  //   })
   
  // }

  ngOnInit(): void {
    this.advertisementService.getAllActive()
    .subscribe(res => {this.advertisements = res;

      this.length = this.advertisements.length;
      this.randomIntFromInterval(1,this.length-1).then(
        result=>{
          this.randNum=result;
          this.advertisement=this.advertisements[this.randNum];
          this.companyService.getOneCompany(this.advertisement.companyId)
            .subscribe(result=>{this.company = result;
              console.log (this.company, "comp")
            })
        }
      );
    })
  }

  async randomIntFromInterval(min:number,max:number) { 
    
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // loadAdvertisement(num:number)
  // {
  //   this.advertisementService.getOne(num)
  //   .subscribe(result =>{ this.advertisement = result;
  //    this.companyService.getOneCompany(this.advertisement.companyId)
  //   .subscribe(result=>this.company = result)
  //   console.log(result.companyId)
  //   })
  // }


}
