import { AnnouncementService } from './../service/announcement.service';
import { Component, OnInit } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDTO } from '../model/productDTO';
import { ShoppingBasketService } from '../service/shopping-basket.service';
import { NavbarHomeComponent } from '../navbar-home/navbar-home.component';
import { AuthenticationService } from '../service/authentication.service';
import { RegisteredUserService } from '../service/registered-user.service';
import { parse, format } from 'date-fns';
import { UserService } from '../service/user.service';
import { UserDTO } from '../model/userDTO';
import { MatDialog } from '@angular/material/dialog';
import { PopUpAddProductIntoBasketComponent } from '../pop-up-add-product-into-basket/pop-up-add-product-into-basket.component';
import { PopUpDeleteAnnouncementComponent } from '../pop-up-delete-announcement/pop-up-delete-announcement.component';
import { PopUpActionComponent } from '../pop-up-action/pop-up-action.component';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {

  id:number;
  announcement:AnnouncementDTO;
  date:string;
  year:string;
  month:string;
  day:string;
  userDTO:UserDTO;
  user:string;
  showEnableButton: boolean = false;

  constructor(private announcementService:AnnouncementService, 
              private route: ActivatedRoute, 
              private shoppingBasketService: ShoppingBasketService, 
              public loginService: AuthenticationService,
              public registeredUserService: RegisteredUserService,
              private userService:UserService,
              private dialogRef: MatDialog,
              private router: Router
              ) {
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
          pictures:[],
          name : "",
          registeredUserId : 0,
          companyId:0
        })
      });
      this.userDTO = new UserDTO({
        id:0,
        username: "",
        password: "",
        email: "",
        mobile: "",
        enabled:false,
        role: ""

      });
   }

  ngOnInit(): void {
    this.loadAnnouncement();
    this.deleteButton();
  }

  loadAnnouncement()
  {
    this.id = this.route.snapshot.params['id'];
    this.announcementService.getOne(this.id)
    .subscribe(res => {this.announcement = res;
      this.registeredUserService.regUserId = this.announcement.registeredUserId;
      this.date = String(this.announcement.date);
      const [yearStr, monthStr, dayStr] = this.date.split(',');
      this.year = String(parseInt(yearStr, 10));
      this.month = String(parseInt(monthStr, 10));
      this.day = String(parseInt(dayStr, 10));
      if(this.announcement.enable == false){
        this.showEnableButton = true;
      }
      if(this.announcement.registeredUserId!=null){
      this.userService.getOne(this.announcement.registeredUserId)
      .subscribe(result=>{this.userDTO = result;
        if(result.role == "RegisteredUser"){
          this.user = "Registrovani korisnik";
        }
      })
      }
      else
      {
        this.userService.getOne(this.announcement.companyId)
        .subscribe(result=>{this.userDTO = result;
          if(result.role == "Company"){
            this.user = "Firma";
          }
        })
      }
      
    })

  }

  /*openDialog() {
    const dialogRef = this.dialogRef.open(PopUpAddProductIntoBasketComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.addIntoBasket();
      }
    });
  }*/

  deleteButton():boolean{
    let role = sessionStorage.getItem("role");
    let id = sessionStorage.getItem("id");
    //let idAnnouncement = this.route.snapshot.params['id'];
    if(role == "RegisteredUser"){
      if(this.announcement.registeredUserId == Number(id)){
        return true;
      }
    } 
    else if(role == "Company"){
      if(this.announcement.companyId == Number(id)){
        return true;
      }
    }
    return false;

  }

  addIntoBasket(){
    //console.log(this.shoppingBasketService.selectedAnnouncements);
    this.shoppingBasketService.selectedAnnouncements.push(this.announcement);
    this.shoppingBasketService.updateNumber(this.shoppingBasketService.selectedAnnouncements.length)
    //this.navbarHomeComponent.ngOnInit()
    //console.log(this.shoppingBasketService.selectedAnnouncements);
  }

  allowPostingOfAnnouncement(){
    const dialogRef = this.dialogRef.open(PopUpActionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.announcementService.allowPostingOfAnnouncement(this.announcement)
        .subscribe(res=> {
          this.router.navigate(['']);
        })
      }
    });
  }

  deleteRequest(){
    const dialogRef = this.dialogRef.open(PopUpActionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.announcementService.deleteRequest(this.announcement.id)
        .subscribe(res=> {
          this.router.navigate(['']);
        })
      }
    });
   
  }

  // ista stvar kao delete request samo sto treba da se razliujuje npr zbog pop-up-a, pa je druga funkcija
  deleteAnnouncement(){
    const dialogRef = this.dialogRef.open(PopUpDeleteAnnouncementComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true ){
        this.announcementService.deleteRequest(this.announcement.id)
    .subscribe(res=> {
      this.router.navigate(['']);
    })
   
      }
    });
  
  }
  
}
