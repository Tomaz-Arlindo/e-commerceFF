import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];

  constructor() {}

  addProduct(product: any) {
    this.cart.push(product); // Adiciona o produto ao array
  }

  getCart() {
    return this.cart; // Retorna todos os produtos no carrinho
  }

  clearCart() {
    this.cart = []; // Limpa o carrinho
  }
}
