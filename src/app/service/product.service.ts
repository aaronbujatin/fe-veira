import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/v1/products';


  getProductByCatalog(catalog : string){
    return this.httpClient.get(`${this.baseUrl}/catalog?catalog=${catalog}`)
  }

}
