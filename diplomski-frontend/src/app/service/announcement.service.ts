import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnnouncementDTO } from '../model/announcementDTO';
import { FilterDTO } from '../model/filterDTO';
import { AnnouncementPage } from '../model/announcement-page';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  url = "http://localhost:8081/api/announcements";
  url1 = "http://localhost:8081/api/announcement";
  public currentPage:number;
  public currentSize:number;
  public isDetailPage: boolean = false;
  public whichTypeOfUser: string;
  public typeOfAnnouncements: string;

  constructor(private http:HttpClient) { }



  getOne(id:number): Observable<AnnouncementDTO> {
    return this.http.get<AnnouncementDTO>(this.url1+"/"+id);
  }

  getAllAnnouncements():Observable<AnnouncementDTO[]>
  {
    return this.http.get<AnnouncementDTO[]>(this.url);
  }

  // getAllRequests():Observable<AnnouncementDTO[]>
  // {
  //   return this.http.get<AnnouncementDTO[]>(this.url + "-requests");
  // }

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

  getAnnouncementsRegUserPaged(page:number,size:number, typeOfAnnouncements:string): Observable<AnnouncementPage> {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size)
      .set('typeOfAnnouncements', typeOfAnnouncements);

    return this.http.get<AnnouncementPage>(this.url + "/mech-reg-user", { params });
  } 

  getAnnouncementsCompanyPaged(page:number,size:number,typeOfAnnouncements:string): Observable<AnnouncementPage> {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size)
      .set('typeOfAnnouncements', typeOfAnnouncements);

    return this.http.get<AnnouncementPage>(this.url + "/mech-company", { params });
  } 

  getAllAnnouncementsOfASingleRegisteredUser(registeredUserId:number):Observable<AnnouncementDTO[]>{
    const params:HttpParams=new HttpParams().append('registeredUserId',registeredUserId);
    return this.http.get<AnnouncementDTO[]>(this.url + "/registered-user",{params});
  }

  allowPostingOfAnnouncement(announcementDTO: AnnouncementDTO): Observable<AnnouncementDTO> {
    return this.http.put<AnnouncementDTO>(this.url1 + '/allow-posting-of-announcement' ,announcementDTO)
  }

  getAllRequests(page:number,size:number): Observable<AnnouncementPage> {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size);

    return this.http.get<AnnouncementPage>(this.url + "-requests", { params });
  } 

  deleteRequest(id:number):Observable<boolean>{
    return this.http.get<boolean>(this.url1+"/delete-request/"+id);
  }

  getAllAnnouncementsOfASingleRegisteredUserPaged(page:number,size:number,registeredUserId:number): Observable<AnnouncementPage> {
    const params = new HttpParams() 
      .set('page', page)
      .set('size', size)
      .set('registeredUserId', registeredUserId);

    return this.http.get<AnnouncementPage>(this.url + "/registered-user-page", { params });
  } 
}
