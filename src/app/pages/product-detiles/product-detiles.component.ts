import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ProductInterface } from '../../types/product-interface';
import data from '../../../../products.json';

@Component({
  selector: 'app-product-detiles',
  standalone: true,
  imports: [ RouterLink],
  templateUrl: './product-detiles.component.html',
  styleUrl: './product-detiles.component.css'
})
export class ProductDetilesComponent {
  products: ProductInterface[] = data;

   id:number

 constructor( private activeRoute: ActivatedRoute) {
   this.id=this.activeRoute.snapshot.params['id']-1;
 }




}
