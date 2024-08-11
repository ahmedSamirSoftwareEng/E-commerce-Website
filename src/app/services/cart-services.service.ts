import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsRequestService } from './products-request.service';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  private counter = new BehaviorSubject<number>(0);
  productId: any;
  cartProductsIds: any[] = [];
  cartProducts: any[] = [];



  constructor(private products_request: ProductsRequestService) {}



 set_productId(id: any) {
    this.productId = id;
  }

  get_productId() {
    return this.productId;
  }

  get_counter()  {
    return this.counter.asObservable();
  }

  set_counter(newCounter: number) {
    this.counter.next(newCounter);
   }


set_cartProductsIds(productId: any) {

  this.cartProductsIds.push(productId);

 for (let index = 0; index < this.cartProductsIds.length; index++) {
   this.products_request.getProductsById(this.cartProductsIds[index]).subscribe((res: any) => {
     if (res) {
       this.cartProducts.push(res);
     }
   })
 }

}
get_cartProductsIds() {
  return this.cartProducts;
}


}
