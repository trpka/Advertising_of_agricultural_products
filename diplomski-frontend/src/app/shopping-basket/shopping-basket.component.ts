import { Component, OnInit } from '@angular/core';
import { ShoppingBasketService } from '../service/shopping-basket.service';
import { AnnouncementDTO } from '../model/announcementDTO';
import { PurchaseDTO } from '../model/purchaseDTO';
import { ProductDTO } from '../model/productDTO';
import { PurchaseService } from '../service/purchase.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PopUpPurchaseDoneComponent } from '../pop-up-purchase-done/pop-up-purchase-done.component';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit {

  announcements: AnnouncementDTO[];
  productsDTO:ProductDTO[];
  price: number = 0;
  index:number;
  purchaseDTO:PurchaseDTO;
  secondStep:boolean = false;
  selectedCity: string= '';
  address:string;
  showNotification:boolean=false;
  lenghtIsNull:boolean;
  secondFormGroup = this._formBuilder.group({
  secondCtrl: ['', Validators.nullValidator],
  });

  constructor(private shoppingBasketService:ShoppingBasketService, 
              private purchaseSerivce:PurchaseService, 
              private _formBuilder: FormBuilder,
              private router: Router,
              private dialogRef: MatDialog) { 
    this.purchaseDTO = new PurchaseDTO({
      id:0,
      date: new Date(),
      totalPrice: 0,
      productsDTO: [],
      registeredUserId: 0,
      city:"",
      address: ""
    });
    this.productsDTO = [];

  }

  ngOnInit(): void {
    this.announcements = this.shoppingBasketService.selectedAnnouncements;
    this.calculatePrice();
    if(this.announcements.length == 0)
    {
      this.lenghtIsNull = true;
    }
    else
    {
      this.lenghtIsNull = false;
    }
   
  }

 

  calculatePrice(){
    for(var a of this.announcements){
      this.price = this.price + a.price;
      this.productsDTO.push(a.productDTO);
    }
  }

  delete(announcementDTO: AnnouncementDTO){
   this.index = this.announcements.indexOf(announcementDTO);
  
   this.shoppingBasketService.selectedAnnouncements.splice(this.index, 1);
   this.shoppingBasketService.updateNumber(this.shoppingBasketService.getselectedAnnouncementsLenght())
  }

  isEqual(cat:string):boolean{
    if(cat == "Mehanizacija")
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  buyFirstStep(){
    this.purchaseDTO.registeredUserId = Number(sessionStorage.getItem('id'));
    this.purchaseDTO.date = new Date();
    this.purchaseDTO.totalPrice = this.price;
    this.purchaseDTO.productsDTO = this.productsDTO;
    this.secondStep = true;
  }

  buySecondStep(){
    this.purchaseDTO.city = this.selectedCity;
    this.purchaseDTO.address = this.address;
    this.purchaseSerivce.save(this.purchaseDTO)
    .subscribe(res=>{this.purchaseDTO=res;
      this.purchaseSerivce.sendMail()
      .subscribe(res=>{
        this.shoppingBasketService.selectedAnnouncements.splice(0, this.shoppingBasketService.getselectedAnnouncementsLenght());
        this.shoppingBasketService.updateNumber(this.shoppingBasketService.getselectedAnnouncementsLenght())
        //this.shoppingBasketService.updateNumber()
        this.router.navigate(['']);
      })
      })
  }

  openDialog1() {
    const dialogRef = this.dialogRef.open(PopUpPurchaseDoneComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.showNotification=true;
        this.buySecondStep();
      }
    });
  }
}
