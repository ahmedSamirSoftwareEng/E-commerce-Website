import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductsRequestService } from '../../services/products-request.service';
import { RootInterface } from '../../types/product-interface';


@Component({
  selector: 'app-product-detiles',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './product-detiles.component.html',
  styleUrl: './product-detiles.component.css'
})
export class ProductDetilesComponent {
  product: RootInterface [] = [];

   id:number

 constructor( private activeRoute: ActivatedRoute, private products_request: ProductsRequestService) {
   this.id=this.activeRoute.snapshot.params['id'];
 }

 ngOnInit(): void {
   this.products_request.getProductsById(this.id).subscribe((res: any) => {
    console.log(res);
     this.product = res.products;
   });
 }
}
