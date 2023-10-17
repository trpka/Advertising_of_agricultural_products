import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../model/advertisement';
import { Company } from '../model/company';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementService } from '../service/advertisement.service';
import { CompanyService } from '../service/company.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpActionComponent } from '../pop-up-action/pop-up-action.component';

@Component({
  selector: 'app-advertisement-request-details',
  templateUrl: './advertisement-request-details.component.html',
  styleUrls: ['./advertisement-request-details.component.css']
})
export class AdvertisementRequestDetailsComponent implements OnInit {

  advertisement:Advertisement;
  company:Company;
  id:number;
  date:string;
  month:string;
  year:string;
  day:string;
  date1:string;
  month1:string;
  year1:string;
  day1:string;
  constructor(private route: ActivatedRoute, 
    private advertisementService:AdvertisementService,
    private companyService: CompanyService,
    private dialogRef: MatDialog,
    private router: Router) {
    this.advertisement=new Advertisement(
      {
        id : 0,
        title : "",
        text : "",
        price : 0,
        image : "",
        startDate: new Date(),
        endDate:new Date(),
        enable: false,
        companyId: 0
      });
      this.company = new Company({
        id:0,
        username: "",
        password: "",
        email: "",
        mobile:"",
        enabled:false,
        role:"",
        authorities: [] ,
        name: "",
        regNumOfCompany: "",
        addressId:0,
        announcements: [],
        products:[]
      });
   }

  ngOnInit(): void {
    this.loadAdvertisement()
  }

  loadAdvertisement(){
    this.id = this.route.snapshot.params['id'];
    this.advertisementService.getOne(this.id)
    .subscribe(res=>{this.advertisement=res;

      this.date = String(this.advertisement.startDate);
      const [yearStr, monthStr, dayStr] = this.date.split(',');
      this.year = String(parseInt(yearStr, 10));
      this.month = String(parseInt(monthStr, 10));
      this.day = String(parseInt(dayStr, 10));

      this.date1 = String(this.advertisement.endDate);
      const [yearStr1, monthStr1, dayStr1] = this.date1.split(',');
      this.year1 = String(parseInt(yearStr1, 10));
      this.month1 = String(parseInt(monthStr1, 10));
      this.day1 = String(parseInt(dayStr1, 10));

      this.companyService.getOneCompany(res.companyId)
      .subscribe(result=>this.company=result)
    })
  }

  allowPostingOfAdvertisement(){

    const dialogRef = this.dialogRef.open(PopUpActionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.advertisementService.allowPostingOfAdvertisement(this.advertisement)
        .subscribe(res=> {
          this.router.navigate(['']);
        })
      }
    });
  }

  deleteRequest(){
    const dialogRef = this.dialogRef.open(PopUpActionComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result==true){
        this.advertisementService.deleteRequest(this.advertisement.id)
        .subscribe(res=> {
          this.router.navigate(['']);
        })
      }
    });
  }

}
