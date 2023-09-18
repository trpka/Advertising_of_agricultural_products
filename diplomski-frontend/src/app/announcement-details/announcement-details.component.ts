import { AnnouncementService } from './../service/announcement.service';
import { Component, OnInit } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { ActivatedRoute } from '@angular/router';
import { ProductDTO } from '../model/productDTO';
import { ShoppingBasketService } from '../service/shopping-basket.service';
import { NavbarHomeComponent } from '../navbar-home/navbar-home.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {

  id:number;
  announcement:AnnouncementDTO;

  constructor(private announcementService:AnnouncementService, private route: ActivatedRoute, private shoppingBasketService: ShoppingBasketService, public loginService: AuthenticationService) {
    this.announcement=new AnnouncementDTO(
      {
        id : 0,
        date: new Date(),
        title : "",
        category : "",
        subcategory : "",
        price : 0,
        quantity : 0,
        city : "",
        mobileNumber:"" ,
        enable:false,
        registeredUserId: 0,
        companyId:0,
        productDTO : new ProductDTO({
          id : 0,
          picture : "",
          additional_description : "",
          name : "",
          registeredUserId : 0,
          companyId:0
        })
      });
   }

  ngOnInit(): void {
    this.loadAnnouncement()
  }

  loadAnnouncement()
  {
    this.id = this.route.snapshot.params['id'];
    this.announcementService.getOne(this.id)
    .subscribe(res => this.announcement = res)
  }

  addIntoBasket(){
    console.log(this.shoppingBasketService.selectedAnnouncements);
    this.shoppingBasketService.selectedAnnouncements.push(this.announcement);
    this.shoppingBasketService.updateNumber(this.shoppingBasketService.selectedAnnouncements.length)
    //this.navbarHomeComponent.ngOnInit()
    console.log(this.shoppingBasketService.selectedAnnouncements);
  }

}
