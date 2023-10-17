import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { RegisteredUser } from '../model/registeredUser';
import { UserDTO } from '../model/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:8081/users/signup/async";
  url1 = "http://localhost:8081/api/user";
  url2 = "http://localhost:8081/users/api/user";

  constructor( private http: HttpClient) { }

  sendEmail(newRegUser: RegisteredUser): Observable<User> {
    return this.http.post<User>(this.url, newRegUser);
}

getOne(id:number): Observable<UserDTO> {
  return this.http.get<UserDTO>(this.url2 +"/"+id);
}

getAllUserById(id: number): Observable<User>
{
  return this.http.get<User>(`${this.url1}/${id}`);
}

}
