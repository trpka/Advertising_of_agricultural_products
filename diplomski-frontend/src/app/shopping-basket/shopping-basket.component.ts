import { Component, OnInit } from '@angular/core';
import { ShoppingBasketService } from '../service/shopping-basket.service';
import { AnnouncementDTO } from '../model/announcementDTO';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  announcements: AnnouncementDTO[];
  price: number = 0;
  constructor(private shoppingBasketService:ShoppingBasketService) { }

  ngOnInit(): void {
    this.announcements = this.shoppingBasketService.selectedAnnouncements;
    this.calculatePrice();
  }

  calculatePrice(){
    for(var a of this.announcements){
      this.price = this.price + a.price
    }
  }

  delete(announcementDTO: AnnouncementDTO){

  }

}
