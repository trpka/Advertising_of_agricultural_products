import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Company } from '../model/company';
import { User } from '../model/user';
import { CompanyAddress } from '../model/companyAddressDTO';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = "http://localhost:8081/api/company";
  url1 = "http://localhost:8081/users/signup/company";
  private enableProfilePageCompany:boolean;
  constructor(private http: HttpClient) { }

  getOneCompany(id:number):Observable<Company>{
    const params:HttpParams=new HttpParams().append('id',id);
    return this.http.get<Company>(this.url,{params});
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
}
