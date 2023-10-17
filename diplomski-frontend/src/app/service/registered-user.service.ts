import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisteredUser } from '../model/registeredUser';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUserService {

  url = "http://localhost:8081/api/registered-user";
  url1 = "http://localhost:8081/api/confirm-registration-register-user";

  private enableProfilePage:boolean;
  private enableEditPage:boolean=false;
  private enableEditPassword:boolean=false;
  public regUserId:number;
  constructor( private http: HttpClient) {

  }

  getOneRegUser(id:number):Observable<RegisteredUser>{
    const params:HttpParams=new HttpParams().append('id',id);
    return this.http.get<RegisteredUser>(this.url,{params});
  }

  activateById(id: number): Observable<RegisteredUser> {
    return this.http.get<RegisteredUser>(`${this.url1}/${id}`);
  }
  
  isRegisteredUserLoggedInAndIsHisAnnouncement(){
    let role = sessionStorage.getItem("role");
    let id = sessionStorage.getItem("id");
    if(role == "RegisteredUser"){
      if(Number(id) !== this.regUserId){
        return true;
      }
      
    }
    return false;
  }

  isRegisteredUserLoggedIn(){
    let role = sessionStorage.getItem("role");
    if(role == "RegisteredUser"){
      return true;
    }
    return false;
  }

  updateRegisteredUser(regUser: RegisteredUser): Observable<RegisteredUser> {
    return this.http.put<RegisteredUser>(this.url + '/update' ,regUser)
  }

  public getEnableProfilePage():boolean{
    return this.enableProfilePage;
  }

  public setEnableProfilePage(val: boolean):void{
    this.enableProfilePage = val;
  }

  public getEnableEditPage():boolean{
    return this.enableEditPage;
  }

  public setEnableEditPage(val: boolean):void{
    this.enableEditPage = val;
  }

  public getEnableEditPassword():boolean{
    return this.enableEditPassword;
  }

  public setEnableEditPassword(val: boolean):void{
    this.enableEditPassword = val;
  }
}
