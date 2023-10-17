import { AnnouncementDTO } from './../model/announcementDTO';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnnouncementService } from '../service/announcement.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterDTO } from '../model/filterDTO';

@Component({
  selector: 'app-mechanization-announcements1',
  templateUrl: './mechanization-announcements1.component.html',
  styleUrls: ['./mechanization-announcements1.component.css']
})
export class MechanizationAnnouncements1Component implements OnInit {

  announcements : AnnouncementDTO[];
  filter : FilterDTO;
  vrednost : number = 1000;
  selectedCity: string= '';
  selectedSort : string='';


  toppings = new FormControl('');
  toppingList: string[];


  last=false;
  page=0;
  size=5;

  fontStyleControl = new FormControl('');
  typeOfUser?: string = "korisnici";
  typeOfAnnouncements:string;
  showButtonForUserAndCompany:boolean=true;
 


  constructor(private announcementService:AnnouncementService, private router: Router, private route: ActivatedRoute) {

    this.filter = new FilterDTO({
      subcategories:[],
      sort: "",
      city: "",
      typeOfUser:"",
      typeOfAnnouncements:""
    })
  }

  ngOnInit(): void {

    if(this.announcementService.typeOfAnnouncements == "Mehanizacija"){
      this.typeOfAnnouncements ="Mehanizacija";
      localStorage.setItem('mojPodatak', 'Mehanizacija');
      this.toppingList = ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni', 'Mašine i alati']
    }
    else if(this.announcementService.typeOfAnnouncements == "Poljoprivredni proizvod"){
      this.typeOfAnnouncements = "Poljoprivredni proizvod";
      localStorage.setItem('mojPodatak', 'Poljoprivredni proizvod');
      this.toppingList = ['Povrće', 'Voće', 'Žitarice', 'Ostalo'];
    }else if(this.announcementService.typeOfAnnouncements == "Poljoprivredni materijal"){
      this.showButtonForUserAndCompany=false;
      this.typeOfAnnouncements = "Poljoprivredni materijal";
      localStorage.setItem('mojPodatak', 'Poljoprivredni materijal');
      this.toppingList = ['Semena', 'Đubriva', 'Stočna hrana', 'Zaštita bilja', 'Alati i oprema']
    }
    else if(this.announcementService.typeOfAnnouncements == undefined)
    {
      this.typeOfAnnouncements = String(localStorage.getItem('mojPodatak'));
      if(this.typeOfAnnouncements == "Mehanizacija"){
        this.toppingList = ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni', 'Mašine i alati'];
      }
      else if(this.typeOfAnnouncements == "Poljoprivredni proizvod"){
        this.toppingList = ['Povrće', 'Voće', 'Žitarice', 'Ostalo'];
      }
      else if(this.typeOfAnnouncements == "Poljoprivredni materijal"){
        this.showButtonForUserAndCompany=false;
        this.toppingList = ['Semena', 'Đubriva', 'Stočna hrana', 'Zaštita bilja', 'Alati i oprema'];
      }
    }
    
    
    if(this.announcementService.isDetailPage===false){
      this.announcementService.currentPage=0;
      this.page=0;
      this.announcementService.currentSize=5;
      this.size = 5;
      this.announcementService.whichTypeOfUser = "korisnici";
    }
    this.page=this.announcementService.currentPage;
    this.size = this.announcementService.currentSize;
    this.announcementService.isDetailPage=false;
    this.typeOfUser = this.announcementService.whichTypeOfUser;
    if(this.announcementService.typeOfAnnouncements == "Poljoprivredni materijal"){
      this.typeOfUser = "firme";
    }
    else if(this.announcementService.typeOfAnnouncements == undefined){
      this.typeOfAnnouncements = String(localStorage.getItem('mojPodatak'));
      if(this.typeOfAnnouncements == "Poljoprivredni materijal"){
        this.typeOfUser = "firme";
      }
    }
    if(this.typeOfUser === "korisnici"){
    
      this.getMechanizationAnnouncementsRegUser();
    }
    else if(this.typeOfUser === "firme"){
      this.getMechanizationAnnouncementsCompany();  
    }
   
  }

  goToAnnouncementDetails(announcementDTO: AnnouncementDTO){
    this.announcementService.whichTypeOfUser = String(this.typeOfUser);
    this.announcementService.isDetailPage=true;
    this.router.navigate(['announcement-details', announcementDTO.id]);
  }

  /*getMechanizationSubcategories():void{
    this.announcementService.getMechanizationSubcategories(this.toppings.value)
    .subscribe(res => this.announcements = res)
    //console.log(this.toppings.value);

   }*/

   /* Funkcija sa jednim parametrom
   getAllMechanizationAnnouncements(){
     this.announcementService.getAllMechanizationAnnouncements10(this.myVariable)
     .subscribe(res => this.announcements = res)
   }*/

   /*sortAnnouncementsByPrice(){
     this.announcementService.sortAnnouncementsByPrice()
     .subscribe(res => this.announcements = res)
   }*/

   applyFilter(){
    if(this.toppings.value === ""){
      this.filter.subcategories = [];
    }
    else{
      this.filter.subcategories = this.toppings.value;
    }

    if(this.selectedCity == ""){
      this.filter.city = this.selectedCity;
    }
    else{
      this.filter.city = this.selectedCity;
    }

    if(this.selectedSort == "")
    {
      this.filter.sort = this.selectedSort;
    }
    else if(this.selectedSort == "priceDesc") {
      this.filter.sort = this.selectedSort;
    }
    else if(this.selectedSort == "priceAsc"){
      this.filter.sort = this.selectedSort;
    } 
    else 
    {
      this.filter.sort = this.selectedSort;
    }
    
    //this.filter.sort = "priceDesc";
    if(this.typeOfUser === "korisnici"){
      this.filter.typeOfUser = "RegisteredUser";
    }
    else if(this.typeOfUser === "firme")
    {
      this.filter.typeOfUser = "Company";
    }
    this.filter.typeOfAnnouncements = this.typeOfAnnouncements;
    this.announcementService.applyFilter(this.filter)
    .subscribe(res => this.announcements = res)
   }

   getMechanizationAnnouncementsRegUser(){
    this.announcementService.getAnnouncementsRegUserPaged(this.page,this.size, this.typeOfAnnouncements)
    .subscribe(res=>{
      this.announcements=res.content;
      this.last=res.last
    });
  }

  getMechanizationAnnouncementsCompany(){
    this.announcementService.getAnnouncementsCompanyPaged(this.page,this.size,this.typeOfAnnouncements)
    .subscribe(res=>{
      this.announcements=res.content;
      this.last=res.last
    });
  }

  goToMechanizationAnnouncementsRegUser(){
    this.size=5;
    this.page=0;
    this.announcementService.currentPage = 0;
    this.announcementService.currentSize = 5;
    this.getMechanizationAnnouncementsRegUser()
  }


  goToMechanizationAnnouncementsCompany(){
    this.size=5;
    this.page=0;
    this.announcementService.currentPage = 0;
    this.announcementService.currentSize = 5;
    this. getMechanizationAnnouncementsCompany()
  }



   nextPage(){
    if(this.typeOfUser==="korisnici"){
      this.page++;
      this.announcementService.currentPage = this.page;
      window.scrollTo({ top: 450, behavior: 'smooth' });
      this.getMechanizationAnnouncementsRegUser();
    }
    else
    {
      this.page++;
      this.announcementService.currentPage = this.page;
      window.scrollTo({ top: 450, behavior: 'smooth' });
      this.getMechanizationAnnouncementsCompany();
    }
  }

  previousPage(){
    if(this.typeOfUser==="korisnici"){
      this.page--;
      this.announcementService.currentPage = this.page;
      window.scrollTo({ top: 450, behavior: 'smooth' });
      this.getMechanizationAnnouncementsRegUser();
    }
    else
    {
      this.page--;
      this.announcementService.currentPage = this.page;
      window.scrollTo({ top: 450, behavior: 'smooth' });
      this.getMechanizationAnnouncementsCompany(); 
    }
  }

  changePageSize(){
    if(this.typeOfUser==="korisnici"){
      this.page=0;
      this.announcementService.currentPage = this.page;
      this.announcementService.currentSize = this.size;
      window.scrollTo({ top: 450, behavior: 'smooth' });
      this.getMechanizationAnnouncementsRegUser();
    }
    else{
      this.page=0;
      this.announcementService.currentPage = this.page;
      this.announcementService.currentSize = this.size;
      window.scrollTo({ top: 450, behavior: 'smooth' });
      this.getMechanizationAnnouncementsCompany();
    }
    
  }

}
