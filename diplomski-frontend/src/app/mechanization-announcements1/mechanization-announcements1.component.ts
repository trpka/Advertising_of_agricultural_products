import { AnnouncementDTO } from './../model/announcementDTO';
import { Component, OnInit } from '@angular/core';
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

  myVariable: number = 0;

  toppings = new FormControl('');

  toppingList: string[] = ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni', 'Mašine i alati'];
  constructor(private announcementService:AnnouncementService, private router: Router, private route: ActivatedRoute) {

    this.filter = new FilterDTO({
      subcategories:[],
      sort: ""
    })
  }

  ngOnInit(): void {
    this.getAllMechanizationAnnouncements();

    this.route.queryParams.subscribe(params => {
      if (params['reset']) {
        this.resetVariable();
      }
    });
  }

  resetVariable() {
    this.myVariable = 0;
  }

  increase(){
    this.myVariable = this.myVariable + 4;
    this.getAllMechanizationAnnouncements();
    window.scrollTo({ top: 500, behavior: 'smooth' });
  }



  goToAnnouncementDetails(announcementDTO: AnnouncementDTO){
    this.router.navigate(['announcement-details', announcementDTO.id]);
  }

  getMechanizationSubcategories():void{

    this.announcementService.getMechanizationSubcategories(this.toppings.value)
    .subscribe(res => this.announcements = res)
    //console.log(this.toppings.value);

   }

   getAllMechanizationAnnouncements(){
     this.announcementService.getAllMechanizationAnnouncements10(this.myVariable)
     .subscribe(res => this.announcements = res)
   }

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
    this.filter.sort = "priceDesc";
    this.announcementService.applyFilter(this.filter)
    .subscribe(res => this.announcements = res)
   }

}
