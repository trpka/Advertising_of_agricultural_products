import { CounterService } from './../service/counter.service';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisement } from './../model/advertisement';
import { AnnouncementService } from './../service/announcement.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  advertisement: Advertisement;
  constructor(private router: Router, private advertisementService:AdvertisementService, private counterService:CounterService) { }

  ngOnInit(): void {
    console.log(this.counterService.getCount())
  }

  loadAdvertisement()
  {
    this.advertisementService.getOne(1)
    .subscribe(res => this.advertisement = res)
  }

  goToMechanization(){
    //this.counterService.increment();
    this.router.navigate(['mechanization-announcements']);
  }

  goToProducts(){

  }

  goToMaterials(){

  }
}
