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

  constructor( private http: HttpClient) {

  }

  getOneRegUser(id:number):Observable<RegisteredUser>{
    const params:HttpParams=new HttpParams().append('id',id);
    return this.http.get<RegisteredUser>(this.url,{params});
  }

  activateById(id: number): Observable<RegisteredUser> {
    return this.http.get<RegisteredUser>(`${this.url1}/${id}`);
  }

}
