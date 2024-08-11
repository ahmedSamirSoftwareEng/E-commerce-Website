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

  products: RootInterface[] = [];



  constructor(private cart_services: CartServicesService,
    private products_request: ProductsRequestService) {

  }

  ngOnInit(): void {

    this.products=this.cart_services.get_cartProductsIds()



  }
  }





