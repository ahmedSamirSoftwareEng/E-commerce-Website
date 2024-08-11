import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsRequestService } from './products-request.service';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {

  private counter = new BehaviorSubject<number>(0);
  productId: any;


  cartProducts: any[] = [];



  constructor(private products_request: ProductsRequestService) { }



  set_productId(id: any) {
    this.productId = id;
  }

  get_productId() {
    return this.productId;
  }

  get_counter() {
    return this.counter.asObservable();
  }

  set_counter(newCounter: number) {
    this.counter.next(newCounter);
  }


  set_cartProductsIds(productId: any) {
    this.products_request.getProductsById(productId).subscribe((res: any) => {

      // if res already in cartproducts

      let found = false;
      for (let i = 0; i < this.cartProducts.length; i++) {
        if (this.cartProducts[i].id === res.id) {
          found = true;
          this.cartProducts[i].quantity++;
          break;
        }
      }
      if (!found) {
        this.cartProducts.push({
          res: res,
          id: res.id,
          quantity: 1,
        }

        );
      }


    });

  }

  get_cartProducts() {
    return this.cartProducts;
  }

  increment (id: number) {

    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id === id) {
       if (this.cartProducts[i].quantity < this.cartProducts[i].res.stock) {
         this.cartProducts[i].quantity++;
         
       }else{
         alert("out of stock");
       }
        break;
      }
    }
  }


  decrement (id: number) {
    for (let i = 0; i < this.cartProducts.length; i++) {
      if (this.cartProducts[i].id === id) {
        if (this.cartProducts[i].quantity > 1) {
          this.cartProducts[i].quantity--;
        }
        break;
      }
    }
  }




}
