import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../types/product-interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() product!: ProductInterface;


}
