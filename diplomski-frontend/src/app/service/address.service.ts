import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../model/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  url = "http://localhost:8081/api/address";
  constructor(private http: HttpClient) { }

  getOneAddress(id:number):Observable<Address>{
    const params:HttpParams=new HttpParams().append('id',id);
    return this.http.get<Address>(this.url,{params});
  }

}
