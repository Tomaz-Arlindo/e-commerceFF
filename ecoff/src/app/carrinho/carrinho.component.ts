import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart(); // Carrega os itens do carrinho
  }

  clearCart() {
    this.cartService.clearCart(); // Limpa o carrinho
    this.cartItems = [];
  }

  delete(number: any) {
    let index = this.cartItems.findIndex(obj => obj.id === number);

  // Se o índice for encontrado, remover o objeto
  if (index !== -1) {
    this.cartItems.splice(index, 1);
  }
  }
}
