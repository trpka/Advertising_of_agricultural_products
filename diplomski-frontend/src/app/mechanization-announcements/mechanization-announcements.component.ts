import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../service/announcement.service';
import { AnnouncementDTO } from '../model/announcementDTO';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-mechanization-announcements',
  templateUrl: './mechanization-announcements.component.html',
  styleUrls: ['./mechanization-announcements.component.css']
})
export class MechanizationAnnouncementsComponent implements OnInit {

  announcements : AnnouncementDTO[];

  toppings = new FormControl('');

  toppingList: string[] = ['Traktori', 'Prikolice', 'Priključne mašine', 'Kombajni', 'Mašine i alati'];
  constructor(private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.getAllMechanizationAnnouncements();
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
