import { Component } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';
import { ProductsRequestService } from '../../services/products-request.service';
import { RootInterface } from '../../types/product-interface';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  products: any = [];



  constructor(private cart_services: CartServicesService,) {

  }

  ngOnInit(): void {

    this.products=this.cart_services.get_cartProducts()
    console.log(this.products);

  }


  increment(id: number) {
  this.cart_services.increment(id);
  this.products=this.cart_services.get_cartProducts();

  }


  decrement(id: number) {
    this.cart_services.decrement(id);
    this.products=this.cart_services.get_cartProducts();
  }


}


