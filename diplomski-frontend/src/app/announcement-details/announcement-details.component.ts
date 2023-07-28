import { AnnouncementService } from './../service/announcement.service';
import { Component, OnInit } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-announcement-details',
  templateUrl: './announcement-details.component.html',
  styleUrls: ['./announcement-details.component.css']
})
export class AnnouncementDetailsComponent implements OnInit {

  id:number;
  announcement:AnnouncementDTO;
  constructor(private announcementService:AnnouncementService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAnnouncement()
  }

  loadAnnouncement()
  {
    this.id = this.route.snapshot.params['id'];
    this.announcementService.getOne(this.id)
    .subscribe(res => this.announcement = res)
  }

}
