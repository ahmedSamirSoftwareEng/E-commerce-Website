import { Component } from '@angular/core';
import  data from '../../../../products.json';
import { CardComponent } from "../../components/card/card.component";
import { ProductInterface } from '../../types/product-interface';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  products: ProductInterface[] = data;
}
