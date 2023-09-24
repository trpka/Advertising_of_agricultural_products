import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { CompanyDTO } from '../model/companyDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile-activation-requirements',
  templateUrl: './company-profile-activation-requirements.component.html',
  styleUrls: ['./company-profile-activation-requirements.component.css']
})
export class CompanyProfileActivationRequirementsComponent implements OnInit {

  companies:CompanyDTO[];
  page=0;
  size=5;
  last=false;

  constructor(private companyService:CompanyService, private router: Router) { }

  ngOnInit(): void {
    if(this.companyService.isDetailPage===false){
      this.companyService.currentPage=0;
      this.page=0;
      this.companyService.currentSize=0;
    }
    this.page=this.companyService.currentPage;
    this.companyService.isDetailPage=false;
    this.getCompaniesActivationRequirements();
  }

  //NAPRAVI NOVU STRANICU ZA DETALJE I ZAVRSI OVO
 /* goToCompanyActivationRequirementDetails(announcementDTO: AnnouncementDTO){
    this.companyService.isDetailPage=true;
    this.router.navigate(['announcement-details', announcementDTO.id]);
  }*/

  getCompaniesActivationRequirements(){
    this.companyService.getCompaniesActivationRequirements(this.page,this.size)
    .subscribe(res=>{
      this.companies=res.content;
      this.last=res.last
    });
  }


  nextPage(){
    this.page++;
    this.companyService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getCompaniesActivationRequirements();
  }
  previousPage(){
    this.page--;
    this.companyService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getCompaniesActivationRequirements();
  }
  changePageSize(){
    this.page=0;
    this.companyService.currentPage = this.page;
    window.scrollTo({ top: 500, behavior: 'smooth' });
    this.getCompaniesActivationRequirements();
  }

}
