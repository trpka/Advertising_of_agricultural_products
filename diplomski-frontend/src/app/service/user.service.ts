import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url1 = "http://localhost:8081/users/signup/async";
  url2 = "http://localhost:8081/api/user";

  constructor( private http: HttpClient) { }

  sendEmail(newUser: User): Observable<User> {
    return this.http.post<User>(this.url1, newUser);
}

getAllUserById(id: number): Observable<User>
{
  return this.http.get<User>(`${this.url2}/${id}`);
}

}
