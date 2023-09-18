import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  isAdminLoggedIn(){
    let role = sessionStorage.getItem("role");
    if(role == "Admin"){
      return true;
    }
    return false;
  }
}
