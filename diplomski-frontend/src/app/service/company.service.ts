import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  isCompanyLoggedIn(){
    let role = sessionStorage.getItem("role");
    if(role == "Company"){
      return true;
    }
    return false;
  }
}
