import { Component } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent {
  rating: number = 0; // Classificação atual
  hoveredRating: number = 0; // Classificação temporária ao passar o mouse

  // Define a avaliação final
  setRating(rating: number): void {
    this.rating = rating;
  }

  // Atualiza a avaliação temporária ao passar o mouse
  hover(rating: number): void {
    this.hoveredRating = rating;
  }

  // Reseta a avaliação temporária ao sair do mouse
  reset(): void {
    this.hoveredRating = 0;
  }
}
