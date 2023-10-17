import { Component, OnInit } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { AnnouncementService } from '../service/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests-for-posting-announcements',
  templateUrl: './requests-for-posting-announcements.component.html',
  styleUrls: ['./requests-for-posting-announcements.component.css']
})
export class RequestsForPostingAnnouncementsComponent implements OnInit {

  announcements : AnnouncementDTO[];
  page=0;
  size=5;
  last=false;
  constructor(private announcementService:AnnouncementService, private router: Router) { }

  ngOnInit(): void {
    if(this.announcementService.isDetailPage===false){
      this.announcementService.currentPage=0;
      this.page=0;
      this.announcementService.currentSize=5;
    }
    this.page=this.announcementService.currentPage;
    this.announcementService.isDetailPage=false;
    this.getAllRequests();
  }

  getAllRequests(){
    this.announcementService.getAllRequests(this.page,this.size)
    .subscribe(res=>{
      this.announcements=res.content;
      this.last=res.last
    });
    
  }

  goToAnnouncementDetails(announcementDTO: AnnouncementDTO){
    this.announcementService.isDetailPage=true;
    this.router.navigate(['announcement-details', announcementDTO.id]);
  }

  nextPage(){
    this.page++;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllRequests();
  }
  previousPage(){
    this.page--;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllRequests();
  }
  changePageSize(){
    this.page=0;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllRequests();
  }


}
