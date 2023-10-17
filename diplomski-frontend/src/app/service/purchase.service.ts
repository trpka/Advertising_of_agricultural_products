import { Injectable } from '@angular/core';
import { PurchaseDTO } from '../model/purchaseDTO';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  url = "http://localhost:8081/api/purchase";
  constructor(private http: HttpClient) { }

  save(purchaseDTO: PurchaseDTO): Observable<PurchaseDTO> {
    return this.http.post<PurchaseDTO>(this.url , purchaseDTO);
  }

  sendMail():Observable<void>{
    return this.http.get<void>(this.url+"/pdf");
  }
}
