import { Advertisement } from '../model/advertisement';
import { AdvertisementService } from './../service/advertisement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  advertisement:Advertisement;
  advertisements: Advertisement[];
  length:number;
  randNum:number;

  constructor(private advertisementService:AdvertisementService) {
    this.advertisement=new Advertisement(
      {
        id : 0,
        title : "",
        text : "",
        price : 0,
        image : "",
        date : new Date(),
        duration:0, 
        enable: false,
        companyId: 0
      });
  }

  ngOnInit(): void {
    this.advertisementService.getAll()
    .subscribe(res => {this.advertisements = res;
    
    this.length = this.advertisements.length;
    this.randNum = this.randomIntFromInterval(1,this.length);

    this.loadAdvertisement(this.randNum);
    console.log("radim")
    })
   
  }

  randomIntFromInterval(min:number,max:number) { 
    
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  loadAdvertisement(num:number)
  {
    this.advertisementService.getOne(num)
    .subscribe(res => this.advertisement = res)
  }


}
