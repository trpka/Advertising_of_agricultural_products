import { AnnouncementDTO } from './../model/announcementDTO';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AnnouncementService } from '../service/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mechanization-announcements1',
  templateUrl: './mechanization-announcements1.component.html',
  styleUrls: ['./mechanization-announcements1.component.css']
})
export class MechanizationAnnouncements1Component implements OnInit {

  announcements : AnnouncementDTO[];

  toppings = new FormControl('');

  toppingList: string[] = ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni', 'Mašine i alati'];
  constructor(private announcementService:AnnouncementService, private router: Router) { }

  ngOnInit(): void {
    this.getAllMechanizationAnnouncements();
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
     this.announcementService.getAllMechanizationAnnouncements()
     .subscribe(res => this.announcements = res)
   }

   sortAnnouncementsByPrice(){
     this.announcementService.sortAnnouncementsByPrice()
     .subscribe(res => this.announcements = res)
   }

}
