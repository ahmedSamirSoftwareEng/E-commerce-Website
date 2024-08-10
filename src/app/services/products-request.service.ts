import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsRequestService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductsById(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
