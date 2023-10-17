import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../service/advertisement.service';
import { Advertisement } from '../model/advertisement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requests-for-advertising',
  templateUrl: './requests-for-advertising.component.html',
  styleUrls: ['./requests-for-advertising.component.css']
})
export class RequestsForAdvertisingComponent implements OnInit {

  advertisements:Advertisement[];
  advertisement:Advertisement;
  page=0;
  size=5;
  last=false;
  constructor(private advertisementService:AdvertisementService, private router: Router) { }

  ngOnInit(): void {
    if(this.advertisementService.isDetailPage===false){
      this.advertisementService.currentPage=0;
      this.page=0;
      this.advertisementService.currentSize=5;
    }
    this.page=this.advertisementService.currentPage;
    this.advertisementService.isDetailPage=false;
    this.getAllInactive();
  }

  getAllInactive(){
    this.advertisementService.getAllInactive(this.page,this.size)
    .subscribe(res=>{
      this.advertisements=res.content;
      this.last=res.last
    });
  }

  goToAdvertisementDetails(advertisement: Advertisement){
    this.advertisementService.isDetailPage=true;
    this.router.navigate(['advertisement-request-details', advertisement.id]);
  }

  nextPage(){
    this.page++;
    this.advertisementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllInactive();
  }
  previousPage(){
    this.page--;
    this.advertisementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllInactive();
  }
  changePageSize(){
    this.page=0;
    this.advertisementService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getAllInactive();
  }

}
