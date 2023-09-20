import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "http://localhost:8081/api/admin";
  constructor(private http: HttpClient) { }

  getOneAdmin(id:number):Observable<Admin>{
    const params:HttpParams=new HttpParams().append('id',id);
    return this.http.get<Admin>(this.url,{params});
  }

  isAdminLoggedIn(){
    let role = sessionStorage.getItem("role");
    if(role == "Admin"){
      return true;
    }
    return false;
  }
}
