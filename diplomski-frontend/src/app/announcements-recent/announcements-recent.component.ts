import { AnnouncementDTO } from '../model/announcementDTO';
import { ProductDTO } from '../model/productDTO';
import { ProductService } from '../service/product.service';
import { AnnouncementService } from './../service/announcement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements-recent',
  templateUrl: './announcements-recent.component.html',
  styleUrls: ['./announcements-recent.component.css']
})
export class AnnouncementsRecentComponent implements OnInit {

  announcements : AnnouncementDTO[];
  date:string;
  year:string;
  month:string;
  day:string;

  constructor(private announcementService:AnnouncementService, private productService:ProductService) {

  }

  ngOnInit(): void {
    this.recentAnnouncements();
  }

  recentAnnouncements()
  {
    this.announcementService.getRecentAnnouncements()
    .subscribe(res => {this.announcements = res;
      for(var a of this.announcements){
        // this.productService.getOne(a.productDTO.id)
        // .subscribe(res1 => a.productDTO = res1)
      }
    })
  }


}
