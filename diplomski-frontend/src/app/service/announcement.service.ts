import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementDTO } from '../model/announcementDTO';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  url = "http://localhost:8081/api/announcements";

  constructor(private http:HttpClient) { }

  getAllAnnouncements():Observable<AnnouncementDTO[]>
  {
    return this.http.get<AnnouncementDTO[]>(this.url);
  }

  getAllMechanizationAnnouncements():Observable<AnnouncementDTO[]>
  {
    return this.http.get<AnnouncementDTO[]>(this.url + "/mechanization");
  }
}
