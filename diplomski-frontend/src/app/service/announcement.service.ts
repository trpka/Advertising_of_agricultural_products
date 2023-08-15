import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementDTO } from '../model/announcementDTO';
import { FilterDTO } from '../model/filterDTO';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  url = "http://localhost:8081/api/announcements";
  url1 = "http://localhost:8081/api/announcement";

  constructor(private http:HttpClient) { }



  getOne(id:number): Observable<AnnouncementDTO> {
    return this.http.get<AnnouncementDTO>(this.url1+"/"+id);
  }

  getAllAnnouncements():Observable<AnnouncementDTO[]>
  {
    return this.http.get<AnnouncementDTO[]>(this.url);
  }

  getRecentAnnouncements():Observable<AnnouncementDTO[]>
  {
    return this.http.get<AnnouncementDTO[]>(this.url  + "-recent");
  }

  getAllMechanizationAnnouncements():Observable<AnnouncementDTO[]>
  {
    return this.http.get<AnnouncementDTO[]>(this.url + "/mechanization");
  }

  getAllMechanizationAnnouncements10(counter:number):Observable<AnnouncementDTO[]>{
    const params:HttpParams=new HttpParams().append('counter',counter);
    return this.http.get<AnnouncementDTO[]>(this.url + "/mechanization10",{params});
  }

  getMechanizationSubcategories(array: string[]): Observable<AnnouncementDTO[]> {
    return this.http.put<AnnouncementDTO[]>(this.url + '/mechanization/subcategories' , array)
  }

  sortAnnouncementsByPrice():Observable<AnnouncementDTO[]>{
    return this.http.get<AnnouncementDTO[]>(this.url+"/mechanization/sort-by-price");
  }

  applyFilter(filter:FilterDTO): Observable<AnnouncementDTO[]> {
    return this.http.put<AnnouncementDTO[]>(this.url + '/mechanization/filter' , filter)
  }

   save(announcementDTO:AnnouncementDTO):Observable<AnnouncementDTO>{
    return this.http.post<AnnouncementDTO>(this.url1 + '-product',announcementDTO);
  }
}
