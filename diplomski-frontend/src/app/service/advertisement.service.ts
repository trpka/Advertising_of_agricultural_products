import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from '../model/advertisement';
import { AdvertisementPage } from '../model/advertisement-page';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {

  url = "http://localhost:8081/api/advertisement";
  url1 = "http://localhost:8081/api/advertisements";

  public currentPage:number;
  public currentSize:number;
  public isDetailPage: boolean = false;
  
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


  getAllActive():Observable<Advertisement[]>
  {
    return this.http.get<Advertisement[]>(this.url1 +'/active');
  }

  getAllInactive(page:number,size:number): Observable<AdvertisementPage> {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);

    return this.http.get<AdvertisementPage>(this.url1 + "/inactive", { params });
  } 

  allowPostingOfAdvertisement(announcement: Advertisement): Observable<Advertisement> {
    return this.http.put<Advertisement>(this.url + '/allow-posting-of-advertisement' ,announcement)
  }

  deleteRequest(id:number):Observable<boolean>{
    return this.http.get<boolean>(this.url+"/delete-request/"+id);
  }
}
