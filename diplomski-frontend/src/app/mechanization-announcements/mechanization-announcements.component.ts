import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../service/announcement.service';
import { AnnouncementDTO } from '../model/announcementDTO';

@Component({
  selector: 'app-mechanization-announcements',
  templateUrl: './mechanization-announcements.component.html',
  styleUrls: ['./mechanization-announcements.component.css']
})
export class MechanizationAnnouncementsComponent implements OnInit {

  announcements : AnnouncementDTO[];
  constructor(private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.getAllMechanizationAnnouncements();
  }

  getAllMechanizationAnnouncements(){
    this.announcementService.getAllMechanizationAnnouncements()
    .subscribe(res => this.announcements = res)
  }
}
