import { AnnouncementDTO } from './../model/announcementDTO';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
  toppingList: string[] = ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni', 'Mašine i alati'];


  last=false;
  page=0;
  size=5;

  constructor(private announcementService:AnnouncementService, private router: Router, private route: ActivatedRoute) {

    this.filter = new FilterDTO({
      subcategories:[],
      sort: "",
      city: ""
    })
  }

  ngOnInit(): void {
    //this.getAllMechanizationAnnouncements();
    if(this.announcementService.isDetailPage===false){
      this.announcementService.currentPage=0;
      this.page=0;
      this.announcementService.currentSize=0;
    }
    this.page=this.announcementService.currentPage;
    this.announcementService.isDetailPage=false;
    this.getMechanizationAnnouncements();
  }

  goToAnnouncementDetails(announcementDTO: AnnouncementDTO){
    this.announcementService.isDetailPage=true;
    this.router.navigate(['announcement-details', announcementDTO.id]);
  }

  getMechanizationSubcategories():void{

    this.announcementService.getMechanizationSubcategories(this.toppings.value)
    .subscribe(res => this.announcements = res)
    //console.log(this.toppings.value);

   }

   /* Funkcija sa jednim parametrom
   getAllMechanizationAnnouncements(){
     this.announcementService.getAllMechanizationAnnouncements10(this.myVariable)
     .subscribe(res => this.announcements = res)
   }*/

   sortAnnouncementsByPrice(){
     this.announcementService.sortAnnouncementsByPrice()
     .subscribe(res => this.announcements = res)
   }

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
    this.announcementService.applyFilter(this.filter)
    .subscribe(res => this.announcements = res)
   }

   getMechanizationAnnouncements(){
    this.announcementService.getAnnouncementsPaged(this.page,this.size)
    .subscribe(res=>{
      this.announcements=res.content;
      this.last=res.last
    });
  }


   nextPage(){
    this.page++;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getMechanizationAnnouncements();
  }
  previousPage(){
    this.page--;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getMechanizationAnnouncements();
  }
  changePageSize(){
    this.page=0;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getMechanizationAnnouncements();
  }

}
