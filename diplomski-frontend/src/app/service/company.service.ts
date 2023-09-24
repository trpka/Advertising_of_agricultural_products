import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Company } from '../model/company';
import { User } from '../model/user';
import { CompanyAddress } from '../model/companyAddressDTO';
import { CompanyActivationRequirementPage } from '../model/company-activation-requirement-page';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = "http://localhost:8081/api/company";
  url1 = "http://localhost:8081/users/signup/company";
  private enableProfilePageCompany:boolean;
  
  public currentPage:number;
  public currentSize:number;
  public isDetailPage: boolean = false;
  
  constructor(private http: HttpClient) { }

  getOneCompany(id:number):Observable<Company>{
    const params:HttpParams=new HttpParams().append('id',id);
    return this.http.get<Company>(this.url,{params});
  }
  activateCompany(id:number):Observable<Company>{
    return this.http.get<Company>(this.url+"/activate/"+id);
  }
  deactivateCompany(id:number):Observable<boolean>{
    return this.http.get<boolean>(this.url+"/deactivate/"+id);
  }

  saveCompany(companyAddress: CompanyAddress): Observable<User> {
    return this.http.post<User>(this.url1 , companyAddress);
}

  isCompanyLoggedIn(){
    let role = sessionStorage.getItem("role");
    if(role == "Company"){
      return true;
    }
    return false;
  }

  public getEnableProfilePageCompany():boolean{
    return this.enableProfilePageCompany;
  }

  public setEnableProfilePageCompany(val: boolean):void{
    this.enableProfilePageCompany = val;
  }

  getCompaniesActivationRequirements(page:number,size:number): Observable<CompanyActivationRequirementPage> {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);

    return this.http.get<CompanyActivationRequirementPage>(this.url + "/activation-requirements", { params });
  } 
}
