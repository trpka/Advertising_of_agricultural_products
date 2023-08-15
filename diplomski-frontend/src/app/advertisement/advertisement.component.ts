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

  constructor(private advertisementService:AdvertisementService) {
    this.advertisement=new Advertisement(
      {
        id : 0,
        title : "",
        text : "",
        price : 0,
        image : "",
        date : new Date()
      });
  }

  ngOnInit(): void {
    this.loadAdvertisement()
  }

  loadAdvertisement()
  {
    this.advertisementService.getOne(1)
    .subscribe(res => this.advertisement = res)
  }


}
