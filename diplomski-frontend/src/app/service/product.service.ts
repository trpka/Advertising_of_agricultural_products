import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from '../model/productDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:8081/api/product";
  constructor(private http:HttpClient) { }

  getOne(id:number): Observable<ProductDTO> {
    return this.http.get<ProductDTO>(this.url+"/"+id);
  }
}
