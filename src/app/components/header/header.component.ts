import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount;

  constructor(private cartService: CartServicesService) {
    this.cartCount =0;
  }

  ngOnInit() {
   this.cartService.get_counter().subscribe((counter) => {

     this.cartCount = counter

   })
  }

}
