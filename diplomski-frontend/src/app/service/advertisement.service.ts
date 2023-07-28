import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from '../model/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  url = "http://localhost:8081/api/advertisement";
  constructor(private http:HttpClient) { }

  getOne(id:number): Observable<Advertisement> {
    return this.http.get<Advertisement>(this.url+"/"+id);
  }
}
