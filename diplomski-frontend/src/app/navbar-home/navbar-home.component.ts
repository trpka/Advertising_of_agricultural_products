import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShoppingBasketService } from '../service/shopping-basket.service';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { RegisteredUserService } from '../service/registered-user.service';
import { CompanyService } from '../service/company.service';
import { AdminService } from '../service/admin.service';


@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {

  numberOfAnnouncementsInBasket : number;
  @Output()
  LogOut: EventEmitter<void> = new EventEmitter();

  constructor( private shoppingBasketService: ShoppingBasketService, 
              private loginService: AuthenticationService,  
              private router: Router,
              public registeredUserService:RegisteredUserService,
              public companyService:CompanyService,
              public adminService:AdminService,
              public shopingBasketService:ShoppingBasketService
              ) { }

  ngOnInit(): void {
    console.log("duzina")
    console.log(this.shoppingBasketService.getselectedAnnouncementsLenght())
    this.numberOfAnnouncementsInBasket = this.shoppingBasketService.getselectedAnnouncementsLenght();
    this.shoppingBasketService.currentNumber$.subscribe((number) => {
      this.numberOfAnnouncementsInBasket = number;
    });
  }

  logOut() {
    this.loginService.logOut();
    this.LogOut.next();
    this.router.navigate(['']);
  }

  goToProfile(){
    this.registeredUserService.setEnableProfilePage(true)
    this.registeredUserService.setEnableEditPage(false)
    this.registeredUserService.setEnableEditPassword(false)
    this.router.navigate(['profile-registered-user']);
    
  }

  goToProfileCompany(){
    this.companyService.setEnableProfilePageCompany(true)
    this.registeredUserService.setEnableProfilePage(false)
    this.registeredUserService.setEnableEditPage(false)
    this.registeredUserService.setEnableEditPassword(false)
    this.router.navigate(['profile-company']);
  }

  showShopingBasket(){
    /*if(this.shopingBasketService.shopingBasketIsActive === true){
      this.shoppingBasketService.shopingBasketIsActive = false;
    }
    else
    {
      this.shopingBasketService.shopingBasketIsActive = true;
    }*/
    this.router.navigate(['shopping-basket-reg-user']);
  }
}
