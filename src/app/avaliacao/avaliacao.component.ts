import { Component } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {
  rating: number = 0;
  hoveredRating: number = 0;

  // Avaliação final
  setRating(rating: number): void {
    this.rating = rating;
  }

  // Avaliação ao passar o mouse
  hover(rating: number): void {
    this.hoveredRating = rating;
  }

  // Reseta a avaliação ao sair do mouse
  reset(): void {
    this.hoveredRating = 0;
  }
}
