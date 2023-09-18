import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from '../model/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  url = "http://localhost:8081/api/advertisement";
  url1 = "http://localhost:8081/api/advertisements";
  constructor(private http:HttpClient) { }

  getOne(id:number): Observable<Advertisement> {
    return this.http.get<Advertisement>(this.url+"/"+id);
  }

  getAll():Observable<Advertisement[]>
  {
    return this.http.get<Advertisement[]>(this.url1);
  }

  save(advertisement:Advertisement):Observable<Advertisement>{
    return this.http.post<Advertisement>(this.url + '/save',advertisement);
  }
}
