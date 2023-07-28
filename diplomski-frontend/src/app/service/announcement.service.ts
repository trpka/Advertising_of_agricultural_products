import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementDTO } from '../model/announcementDTO';

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

  getAllMechanizationAnnouncements():Observable<AnnouncementDTO[]>
  {
    return this.http.get<AnnouncementDTO[]>(this.url + "/mechanization");
  }

  getMechanizationSubcategories(array: string[]): Observable<AnnouncementDTO[]> {
    return this.http.put<AnnouncementDTO[]>(this.url + '/mechanization/subcategories' , array)
  }

  sortAnnouncementsByPrice():Observable<AnnouncementDTO[]>{
    return this.http.get<AnnouncementDTO[]>(this.url+"/mechanization/sort-by-price");
  }
}
