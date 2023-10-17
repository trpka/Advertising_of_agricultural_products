import { Component, OnInit } from '@angular/core';
import { AnnouncementDTO } from '../model/announcementDTO';
import { AnnouncementService } from '../service/announcement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-announcements',
  templateUrl: './my-announcements.component.html',
  styleUrls: ['./my-announcements.component.css']
})
export class MyAnnouncementsComponent implements OnInit {

  announcements: AnnouncementDTO[];
  id:number;
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
    this.getAllAnnouncementsOfASingleRegisteredUserPaged();
  }


  getAllAnnouncementsOfASingleRegisteredUserPaged(){
    this.id = Number(sessionStorage.getItem('id'));
    this.announcementService.getAllAnnouncementsOfASingleRegisteredUserPaged(this.page,this.size,this.id)
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
    this.getAllAnnouncementsOfASingleRegisteredUserPaged();
  }
  previousPage(){
    this.page--;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllAnnouncementsOfASingleRegisteredUserPaged();
  }
  changePageSize(){
    this.page=0;
    this.announcementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllAnnouncementsOfASingleRegisteredUserPaged();
  }

}
