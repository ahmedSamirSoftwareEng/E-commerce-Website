import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductsRequestService } from '../../services/products-request.service';
import { CartServicesService } from '../../services/cart-services.service';



@Component({
  selector: 'app-product-detiles',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-detiles.component.html',
  styleUrl: './product-detiles.component.css'
})
export class ProductDetilesComponent {

  product: any = [];

  id: number
  counter ;

  products : any = [];
  constructor(private activeRoute: ActivatedRoute,
    private products_request: ProductsRequestService,
    private cart_services: CartServicesService,
  )
   {
    this.id = this.activeRoute.snapshot.params['id'];

    this.counter = 0;
  }

  ngOnInit() {
    this.cart_services.get_counter().subscribe((counterService) => {
           this.counter = counterService

    });
    this.products_request.getProductsById(this.id).subscribe((res: any) => {
      this.product = res;

    });

  }

  addToCart (id: number) {

    this.cart_services.set_cartProductsIds(id);

  
    this.cart_services.set_counter(++this.counter);

  }

}
