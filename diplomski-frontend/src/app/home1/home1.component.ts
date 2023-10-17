import { CounterService } from './../service/counter.service';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisement } from './../model/advertisement';
import { AnnouncementService } from './../service/announcement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingBasketService } from '../service/shopping-basket.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  advertisement: Advertisement;

  constructor(private router: Router, 
              private advertisementService:AdvertisementService, 
              private counterService:CounterService,
              public shopingBasketService:ShoppingBasketService,
              public announcementService : AnnouncementService
              ){ 
  
    }

  ngOnInit(): void {
    console.log(this.counterService.getCount())
  }

  goToMechanization(){
    //this.counterService.increment();
    this.announcementService.typeOfAnnouncements = "Mehanizacija";
    this.router.navigate(['mechanization-announcements']);
  }

  goToProducts(){
    this.announcementService.typeOfAnnouncements = "Poljoprivredni proizvod";
    this.router.navigate(['mechanization-announcements']);
  }

  goToMaterials(){
    this.announcementService.typeOfAnnouncements = "Poljoprivredni materijal";
    this.router.navigate(['mechanization-announcements']);
  }
}
