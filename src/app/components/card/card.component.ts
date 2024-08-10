import { Component, Input } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() product!: any;

  toInt (decimal : number) {
    return Math.round(decimal);
  }

}
