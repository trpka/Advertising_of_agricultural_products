import { Component, OnInit } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { AnnouncementService } from '../service/announcement.service';

@Component({
  selector: 'app-requests-for-posting-announcements',
  templateUrl: './requests-for-posting-announcements.component.html',
  styleUrls: ['./requests-for-posting-announcements.component.css']
})
export class RequestsForPostingAnnouncementsComponent implements OnInit {

  announcements : AnnouncementDTO[];
  constructor(private announcementService:AnnouncementService) { }

  ngOnInit(): void {
    this.getAllRequests();
  }

  getAllRequests(){
    this.announcementService.getAllRequests()
    .subscribe(res => this.announcements = res)
    
  }

}
