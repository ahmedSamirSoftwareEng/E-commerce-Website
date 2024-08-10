import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { ProductsRequestService } from '../../services/products-request.service';
import { RootInterface } from '../../types/product-interface';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private products_request: ProductsRequestService) { }

  products: RootInterface[] = [];

  ngOnInit(): void {
    this.products_request.getProducts().subscribe((res: any) => {
      this.products = res.products;
    });
  }




}
