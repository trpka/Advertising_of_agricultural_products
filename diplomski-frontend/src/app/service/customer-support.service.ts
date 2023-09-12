import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CustomerSupportDTO } from '../model/customerSuportDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerSupportService {

  url = "http://localhost:8081/api/customer-support"
  constructor(private http:HttpClient) { }

  save(customerSupportDTO:CustomerSupportDTO):Observable<CustomerSupportDTO>{
    return this.http.post<CustomerSupportDTO>(this.url,customerSupportDTO);
  }
  
}
