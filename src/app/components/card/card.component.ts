import { Component, Input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartServicesService } from '../../services/cart-services.service';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  counter: number = 0;

  @Input() product!: any;

  constructor(private cart_services: CartServicesService) { }

  toInt (decimal : number) {
    return Math.round(decimal);
  }

  addToCart (event : any,id: number) {

    event.stopPropagation();

    this.cart_services.set_cartProductsIds(id);

    this.cart_services.get_counter().subscribe((counterService) => {
      this.counter = counterService
    });

    this.cart_services.set_counter(++this.counter);

  }

}
