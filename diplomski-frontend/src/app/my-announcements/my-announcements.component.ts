import { Component, OnInit } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { AnnouncementService } from '../service/announcement.service';

@Component({
  selector: 'app-my-announcements',
  templateUrl: './my-announcements.component.html',
  styleUrls: ['./my-announcements.component.css']
})
export class MyAnnouncementsComponent implements OnInit {

  announcements: AnnouncementDTO[];
  id:number;
  constructor(private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.getAllAnnouncementsOfASingleRegisteredUser();
  }

  getAllAnnouncementsOfASingleRegisteredUser(){
    this.id = Number(sessionStorage.getItem('id'));
    this.announcementService.getAllAnnouncementsOfASingleRegisteredUser(this.id)
    .subscribe(res => this.announcements = res)
    
  }

}
